<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="book">
	<html>
    	<head>
        	<title>XSL tutorial</title>
        </head>
    	<body>
        	<h1>Khoa hoc lap trinh jQuery Master</h1>
            <ul>
            	<li>Ten khoa hoc: <xsl:value-of select="title"/></li>
                <li>Tac gia: <xsl:value-of select="author"/></li>
                <li>So trang: <xsl:value-of select="page"/></li>
                <xsl:if test="weight &gt; 500">
                	<li>Khoi luong: <xsl:value-of select="weight"/>
                				 <xsl:value-of select="weight/@units"/>
                	</li>
                </xsl:if>
            </ul>
            <h3>Cach nhung tap tin .xsl vao tap tin .xml</h3>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>