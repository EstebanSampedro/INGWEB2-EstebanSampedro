USE [master]
GO
/****** Object:  Database [ING_SGNoticias]    Script Date: 12/10/2022 07:06:42 p. m. ******/
CREATE DATABASE [ING_SGNoticias]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ING_SGNoticias', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\ING_SGNoticias.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ING_SGNoticias_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\ING_SGNoticias_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [ING_SGNoticias] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ING_SGNoticias].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ING_SGNoticias] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET ARITHABORT OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ING_SGNoticias] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ING_SGNoticias] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET  DISABLE_BROKER 
GO
ALTER DATABASE [ING_SGNoticias] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ING_SGNoticias] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ING_SGNoticias] SET  MULTI_USER 
GO
ALTER DATABASE [ING_SGNoticias] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ING_SGNoticias] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ING_SGNoticias] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ING_SGNoticias] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ING_SGNoticias] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ING_SGNoticias] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [ING_SGNoticias] SET QUERY_STORE = OFF
GO
USE [ING_SGNoticias]
GO
/****** Object:  Table [dbo].[Article]    Script Date: 12/10/2022 07:06:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Article](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](100) NULL,
	[Content] [varchar](100) NULL,
	[Email] [varchar](100) NULL,
	[Image] [varchar](100) NULL,
	[IsActive] [int] NULL,
	[IsApproved] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Events]    Script Date: 12/10/2022 07:06:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Events](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](100) NULL,
	[Content] [varchar](100) NULL,
	[Email] [varchar](100) NULL,
	[IsActive] [int] NULL,
	[CreatedOn] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[News]    Script Date: 12/10/2022 07:06:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[News](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](100) NULL,
	[Content] [varchar](100) NULL,
	[Email] [varchar](100) NULL,
	[IsActive] [int] NULL,
	[CreatedOn] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Registration]    Script Date: 12/10/2022 07:06:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Registration](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[Email] [varchar](100) NULL,
	[Password] [varchar](100) NULL,
	[PhoneNo] [varchar](100) NULL,
	[IsActive] [int] NULL,
	[IsApproved] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Staff]    Script Date: 12/10/2022 07:06:42 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Staff](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[Email] [varchar](100) NULL,
	[Password] [varchar](100) NULL,
	[IsActive] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Article] ON 

INSERT [dbo].[Article] ([ID], [Title], [Content], [Email], [Image], [IsActive], [IsApproved]) VALUES (1, N'Test', N'test', N'galpo@yahoo.es', N'Avatar.png', 1, 1)
SET IDENTITY_INSERT [dbo].[Article] OFF
GO
SET IDENTITY_INSERT [dbo].[Registration] ON 

INSERT [dbo].[Registration] ([ID], [Name], [Email], [Password], [PhoneNo], [IsActive], [IsApproved]) VALUES (1, N'gola', N'hola@yahoo.es', N'123', N'432', 1, 1)
INSERT [dbo].[Registration] ([ID], [Name], [Email], [Password], [PhoneNo], [IsActive], [IsApproved]) VALUES (2, N'esteban ', N'galpo@yahoo.es', N'5555', N'0997243526', 1, 0)
INSERT [dbo].[Registration] ([ID], [Name], [Email], [Password], [PhoneNo], [IsActive], [IsApproved]) VALUES (3, N'admin', N'admin', N'admin', NULL, 1, 1)
INSERT [dbo].[Registration] ([ID], [Name], [Email], [Password], [PhoneNo], [IsActive], [IsApproved]) VALUES (4, N'prueba', N'bpl@yahoo.es', N'123', N'123', 1, 0)
INSERT [dbo].[Registration] ([ID], [Name], [Email], [Password], [PhoneNo], [IsActive], [IsApproved]) VALUES (5, N'pedro', N'pedro@gmail.com', N'topo', N'09987', 1, 0)
SET IDENTITY_INSERT [dbo].[Registration] OFF
GO
USE [master]
GO
ALTER DATABASE [ING_SGNoticias] SET  READ_WRITE 
GO
