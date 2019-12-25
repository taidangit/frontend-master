<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">
	<html>
    <head>
    	<title>XPATH tutorial</title>
    </head>
    <body>
    	<h1>Position in XPath</h1>
        <div>        	
            Tính phí số tiền được giảm của mỗi cuốn sách
        </div>
        <hr />
        <div>
        	
        	<br /> Số cuốn sách: <xsl:value-of select="count(book_shop/book)" />
            <br /> Tổng số tiền: <xsl:value-of select="sum(book_shop/book/price/saleoff)" />
           
        </div>
       
    </body>
    </html>
</xsl:template>

</xsl:stylesheet>