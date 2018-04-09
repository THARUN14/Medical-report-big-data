import sbt.Keys.libraryDependencies

name := "final"

version := "1.0"

scalaVersion := "2.11.8"
libraryDependencies += "org.apache.spark" %% "spark-core" % "2.3.0"
libraryDependencies ++= Seq(
  "org.apache.hadoop" % "hadoop-client" % "2.7.0")




