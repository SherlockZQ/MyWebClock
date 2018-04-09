/* 
Navicat MySQL Data Transfer 

Source Server         : localhost 
Source Server Version : 50520 
Source Host           : localhost:3306 
Source Database       : mo 

Target Server Type    : MYSQL 
Target Server Version : 50520 
File Encoding         : 65001 

Date: 2013-10-17 12:00:56 
*/

-- ---------------------------- 
-- Table structure for [user] 
-- ---------------------------- 
USE test 
GO 

DROP TABLE [user]; 
CREATE TABLE [user] ( 
  id bigint NOT NULL PRIMARY KEY IDENTITY(1000, 1), 
  create_date datetime DEFAULT NULL, 
  edit_date datetime DEFAULT NULL, 
  is_delete int DEFAULT NULL, 
  [name] varchar(255) DEFAULT NULL, 
  sex varchar(255) DEFAULT NULL, 
  age int DEFAULT NULL
); 

-- ---------------------------- 
-- Records of user 
-- ---------------------------- 
INSERT INTO [user] VALUES ('2013-04-02 16:01:00', '2013-04-02 16:01:17', '0', 'Oppo', '男', '20'); 
INSERT INTO [user] VALUES ('2013-04-02 16:01:02', '2013-04-02 16:01:17', '0', 'Mini', '女', '18'); 
INSERT INTO [user] VALUES ('2013-04-02 16:01:04', '2013-04-02 16:01:17', '0', 'Kina', '女', '18'); 
INSERT INTO [user] VALUES ('2013-04-02 16:01:06', '2013-04-02 16:01:17', '0', 'Lora', '男', '19'); 
INSERT INTO [user] VALUES ('2013-04-02 16:01:08', '2013-04-02 16:01:17', '0', '榕Sir', '女', '18'); 
INSERT INTO [user] VALUES ('2013-04-02 16:01:10', '2013-04-02 16:01:17', '0', '兼容', '女', '19'); 
INSERT INTO [user] VALUES ('2013-04-02 16:01:13', '2013-04-02 16:01:17', '0', 'Sir云', '男', '18'); 
INSERT INTO [user] VALUES ('2013-04-02 16:01:17', '2013-04-02 16:01:17', '0', '明白了', '男', '18'); 
INSERT INTO [user] VALUES ('2013-04-02 16:37:00', '2013-04-02 16:37:00', '0', 'Guro Go Sir', '女', '19');