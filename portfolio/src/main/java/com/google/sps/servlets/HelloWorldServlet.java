package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import java.util.ArrayList; // import the ArrayList class


/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")

public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json");
    ArrayList<String> list = new ArrayList<String> ();

    // add name parts to an array list
    list.add("hi");
    list.add("my");
    list.add("name");
    list.add("is");
    list.add("kai");
    list.add("pandit");
    String json = new Gson().toJson(list);
    response.getWriter().println(json);
  }
}