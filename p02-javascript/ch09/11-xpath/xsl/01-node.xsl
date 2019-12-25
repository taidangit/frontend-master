<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:template match="/">
	<html>
    	<head>
    		<title>XPATH tutorial</title>
    	</head>
    	<body>
    		<h1>Node in XPath</h1>
        	<div>
        		<xsl:for-each select="book_shop/book/@id">
        			<xsl:value-of select="." /><br />
            	</xsl:for-each>
           
        	</div>
        	<div>
        		nodename  : Lấy tất cả node có tên là "nodename"<br />
            	/		  : Lựa chọn từ phần tử gốc của tập tin XML <br />
            	//nodename:	Truy cập vào node có tên nodename ở ví trí bất kỳ
            	.		  : Lấy toàn bộ giá trị node hiện thời
            	..		  : Lấy toàn bộ giá trị của node cha
            	@		  : Lấy giá trị của thuộc tính
        	</div>
    	</body>
    </html>
</xsl:template>

</xsl:stylesheet>