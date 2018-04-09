/**
  * Created by Administrator on 4/9/2018.
  */
import javax.servlet.http.{HttpServlet, HttpServletRequest, HttpServletResponse}
class servy {
  override def doGet(request: HttpServletRequest, response: HttpServletResponse) {

    response setContentType ("text/html")

    val out = response getWriter

    out println """<html>
  <head>
      <title>Scala Servlet
  <body>
      <p>Hello world!"""
  }
}

}
