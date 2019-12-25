<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="book_shop">
	<html>
    	<head>
        	<title>XSL tutorial</title>
        </head>
    	<body>
        	<h1>Khoa hoc lap trinh jQuery Master</h1>
            
            <xsl:for-each select="book">
            	<xsl:sort select="weight" order="ascending" data-type="number"/>
           		<ul>
            		<li>Ten khoa hoc: <xsl:value-of select="title"/></li>
                	<li>Tac gia: <xsl:value-of select="author"/></li>
                	<li>So trang: <xsl:value-of select="page"/></li>
                
                	<li>Khoi luong: <xsl:value-of select="weight"/>
                				 <xsl:value-of select="weight/@units"/>
                	</li>
                
             		=======================================
           		 </ul>
            </xsl:for-each>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>