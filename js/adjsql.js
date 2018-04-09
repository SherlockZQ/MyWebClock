<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml"> 
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
<title>JS操作数据库</title> 
<script language="javascript" type="text/javascript"> 
var conn, rs; 

/*获取数据库连接*/
function getConnection() { 
    conn = new ActiveXObject("ADODB.Connection"); 
    // 1.JavaScript操作数据库JS操作Access数据库 
    // 在F盘有文件abc.mdf，表名为user，一共2个字段，id数字类型主键，name文本类型 
    // conn.Open("DBQ=f://abc.mdb;DRIVER={Microsoft Access Driver (*.mdb)};"); 

    // 2.JavaScript操作数据库JS操作SQL Server数据库 
    // 数据库名为：test，表名为user，id为int类型，自增列，name为用户名，为varchar类型；数据库用户名为sa，密码是sasa。 
    conn.Open("Driver={SQL Server};Server=.;DataBase=test;UID=sa;Password=sasa");       //打开数据库 
    return conn; 
} 

/*执行增删改的方法*/
function executeUpdate(sql) { 
    getConnection(); 
    try { 
        conn.execute(sql); 
        return true; 
    } catch (e) { 
        document.write(e.description); 
    } finally { 
        closeAll(); 
    } 
    return false; 
} 

/*执行查询的方法*/
function executeQuery(sql) { 
    getConnection(); 
    try { 
        rs = new ActiveXObject("ADODB.Recordset"); 
        rs.open(sql, conn); 
        var html = ""; 
        while(!rs.EOF) { 
            html = html + rs.Fields("id") + "    " + rs.Fields("name")+"<br/>"; 
            rs.moveNext(); 
        } 
        document.write(html); 
    } catch (e) { 
        document.write(e.description); 
    } finally { 
        closeAll(); 
    } 
} 

/*关闭所有资源*/
function closeAll() { 
    if(rs != null) { 
        rs.close(); 
        rs = null; 
    } 
    if(conn != null) { 
        conn.close(); 
        conn = null; 
    } 
} 

// 增 
// executeUpdate("INSERT INTO [user](create_date, edit_date, is_delete, [name], sex, age) VALUES ('2013-10-17 12:00:00', '2013-10-17 12:00:00', 0, '空', '男', 20)"); 
// 删 
// executeUpdate("DELETE FROM [user] WHERE id = 1009"); 
// 改 
// executeUpdate("UPDATE [user] SET sex = '女', age = 18 WHERE id = 1009"); 
// 查 
executeQuery("select * from [user]"); 
</script> 
</head> 

<body> 
</body> 
</html>