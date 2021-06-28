using AutoMapper;
using IncidentsHandler.Data.Context;
using IncidentsHandler.Data.Repositories.Entities;
using IncidentsHandler.Data.Repositories.Interfaces;
using IncidentsHandler.Services.AutoMapper;
using IncidentsHandler.Services.Entities;
using IncidentsHandler.Services.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;

namespace IncidentsHandler.Application
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            // Context

            services.AddDbContext<IncidentsHandlerDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("IncidentsHandlerConnection")));

            // AutoMapper

            services.AddAutoMapper(typeof(IncidentsHandlerMapper));

            // Swagger
            // See the method Configure.

            services.AddSwaggerGen(options =>
            {
                options.SwaggerDoc("v1", new OpenApiInfo { Title = "IncidentsHandler API", Version = "v1" });

                // Swagger JWT
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "JWT Authorization header using the Bearer scheme."
                });

                // Swagger JWT
                options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        new string[] {}
                    }
                });
            });

            // CORS - Cross Origin Resource Sharing
            // See the method Configure.

            services.AddCors(x => x.AddPolicy("CORS", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            // JWT
            // See the method Configure.

            byte[] key = Encoding.ASCII.GetBytes(Configuration.GetValue<string>("JwtSecretKey"));

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = false
                };
            });

            // Repositories

            services.AddTransient<IDepartmentRepository, DepartmentRepository>();
            services.AddTransient<IPositionRepository, PositionRepository>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IIncidentHistoryRepository, IncidentHistoryRepository>();
            services.AddTransient<ISLARepository, SLARepository>();
            services.AddTransient<IPriorityRepository, PriorityRepository>();
            services.AddTransient<IIncidentRepository, IncidentRepository>();

            // Services

            services.AddTransient<IDepartmentService, DepartmentService>();
            services.AddTransient<IPositionService, PositionService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IIncidentHistoryService, IncidentHistoryService>();
            services.AddTransient<ISLAService, SLAService>();
            services.AddTransient<IPriorityService, PriorityService>();
            services.AddTransient<IIncidentService, IncidentService>();
            services.AddTransient<ITokenService, TokenService>();

            // Http context accessor

            services.AddHttpContextAccessor();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            // Swagger

            app.UseSwagger();

            app.UseSwaggerUI(options =>
            {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "IncidentsHandler API");
                options.RoutePrefix = string.Empty;
            });

            app.UseRouting();

            // JWT

            app.UseAuthentication();

            //

            app.UseAuthorization();

            // CORS - Cross Origin Resource Sharing

            app.UseCors("CORS");

            //

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers(); 
            });
        }
    }
}
