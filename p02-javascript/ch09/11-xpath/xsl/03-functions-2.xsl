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
        	<!-- + - * div -->: 
            Tính phí vận chuyển của 3 cuốn sách đến US - EU - VN
        </div>
        <hr />
        <div>
        	
        	<xsl:for-each select="//book">        
            	<h3>  
        			<xsl:value-of select="title" /> | 
                    <xsl:value-of select="weight" />
                    <xsl:value-of select="weight/@units" />            
                </h3>
                <br /> US (<xsl:value-of select="shipping/US" />): 
                		   <xsl:value-of select="(weight div 100)*shipping/US" />
                <br /> EU (<xsl:value-of select="shipping/EU" />): 
			                <xsl:value-of select="(weight div 100)*shipping/EU" />
                <br /> VN (<xsl:value-of select="shipping/VN" />): 
                			<xsl:value-of select="(weight div 100)*shipping/VN" />
                <br /> ==================================
            </xsl:for-each>
            
           
        </div>
       
    </body>
    </html>
</xsl:template>

</xsl:stylesheet>