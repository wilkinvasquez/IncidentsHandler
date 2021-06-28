USE [Incidents];

-- Departments

INSERT INTO
	[Departments]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Marketing');
	
GO

INSERT INTO
	[Departments]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Operations');

GO

INSERT INTO
	[Departments]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Finances');

GO

INSERT INTO
	[Departments]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Sales');

GO

INSERT INTO
	[Departments]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Human Resources');

GO

INSERT INTO
	[Departments]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Information technology');

-- Positions

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Director of marketing', 1);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Marketing analyst', 1);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Marketing consultant', 1);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Logistics Manager', 2);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Project Manager', 2);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Operations Team Leader', 2);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Supply Chain Specialist', 2);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Financial Advisor', 3);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Credit Analyst', 3);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Collection agent', 4);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Sales consultant', 4);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Account manager', 4);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'HR administrator', 5);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'HR analyst', 5);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'HR supervisor', 5);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'HR assistant', 5);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'IT Technician', 6);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Network Engineer', 6);

GO

INSERT INTO
	[Positions]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Computer Programmer', 6);

-- SLAs

GO

INSERT INTO
	[SLAs]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Sevice is critical.', 24);

GO

INSERT INTO
	[SLAs]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Sevice is important.', 16);

GO

INSERT INTO
	[SLAs]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Sevice with no effect.', 10);

-- Priorities

GO

INSERT INTO
	[Priorities]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Hight', 1);

GO

INSERT INTO
	[Priorities]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Medium', 2);

GO

INSERT INTO
	[Priorities]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Low', 3);

-- Users

GO

INSERT INTO
	[Users]
VALUES
	(GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Admin', '', '000-0000000-0', 'admin@incidentsHandler.com', '000-000-0000', GETDATE(), 'admin', '1234', 18);

GO

-- Incidents

INSERT INTO 
    [Incidents]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 1, 'Computer not working', 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.', NULL, NULL, 1, 1, 1, 0);

GO

INSERT INTO 
    [Incidents]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 1, 'Problem with excel', 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.', NULL, NULL, 1, 3, 2, 0);

GO

INSERT INTO 
    [Incidents]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 1, 'No internet in computer', 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.', NULL, NULL, 1, 2, 3, 0);

    GO

INSERT INTO 
    [Incidents]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 1, 'Monitor is blinking', 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.', NULL, NULL, 1, 3, 1, 0);

GO

-- Incidents histories

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 1);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 1);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 1);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 2);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 2);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 3);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 3);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 4);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 4);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 4);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 4);

GO

INSERT INTO 
    [IncidentHistories]
VALUES
    (GETDATE(), 1, NULL, NULL, 0, NULL, NULL, 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.', 4);

