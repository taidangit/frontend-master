<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="book_shop">
	<html>
    	<head>
        	<title>XSL tutorial</title>
        </head>
    	<body>
        	<h1>Khoa hoc lap trinh Jquery</h1>
           <xsl:apply-templates /> 
            
        </body>
    </html>
</xsl:template>

<xsl:template match="book">
	    	<ul>
            	<li>Ten khoa hoc: <xsl:value-of select="title"/></li>
                <li>Tac gia: <xsl:value-of select="author"/></li>
                <li>So trang: <xsl:value-of select="page"/></li>
                
                <li>Khoi luong: <xsl:value-of select="weight"/>
                				 <xsl:value-of select="weight/@units"/>
                </li>
                
            	 <li>===============================</li>
            </ul>
	
</xsl:template>

</xsl:stylesheet>