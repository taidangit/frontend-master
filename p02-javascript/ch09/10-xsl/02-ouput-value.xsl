<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">
	<html>
    	<head>
        	<title>XSL tutorial</title>
        </head>
    	<body>
        	<h1>Khoa hoc lap trinh jQuery</h1>
            <ul>
            	<li>Ten khoa hoc: <xsl:value-of select="book/title"/></li>
                <li>Tac gia: <xsl:value-of select="book/author"/></li>
                <li>So trang: <xsl:value-of select="book/page"/></li>
                <li>Khoi luong: <xsl:value-of select="book/weight"/>
                				 <xsl:value-of select="book/weight/@units"/>
                </li>
            </ul>
            <h3>Cach nhung tap tin .xsl vao tap tin .xml</h3>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>