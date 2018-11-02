package org.pacific_poke;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

public class Main {

    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (Exception ex) {
            System.out.println("Exception: " + ex.getMessage());
            return;
        }

        String url = "jdbc:mysql://localhost:3306/pacificpoke";
        String username = "root";
        String password = "root";

        Connection conn;
        try {
            conn = DriverManager.getConnection(url, username, password);
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
            return;
        }

        Statement stmt;
        ResultSet rs;
        try {
            stmt = conn.createStatement();
            if (stmt.execute("SHOW TABLES")) {
                rs = stmt.getResultSet();
                printResultSet(rs);
            }
        } catch (SQLException ex) {
            System.out.println("SQLException: " + ex.getMessage());
            return;
        }
    }

    final public static void printResultSet(ResultSet rs) throws SQLException {
        ResultSetMetaData rsmd = rs.getMetaData();
        int columnsNumber = rsmd.getColumnCount();
        while (rs.next()) {
            for (int i = 1; i <= columnsNumber; i++) {
                if (i > 1) System.out.print(" | ");
                System.out.print(rs.getString(i));
            }
            System.out.println("");
        }
    }

}
