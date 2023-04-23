<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template match="/">
		<xsl:apply-templates/>
	</xsl:template>

	<xsl:template match="cuestionario">
		<html>
			<head>
				<title>Basico</title>
			</head>

			<body>
				<table border = "1">
					<xsl:for-each select="pregunta">
						<xsl:choose>
							<xsl:when test='@tema="tema1"'>
								<tr bgcolor="#ff0000">
									<td>
										<xsl:value-of select="@tema"/>
									</td>
									<td>
										<xsl:value-of select="enunciado"/>
									</td>
								</tr>
							</xsl:when>
						</xsl:choose>

					</xsl:for-each>
					<xsl:for-each select="pregunta">
						<xsl:choose>
							<xsl:when test='@tema="tema2"'>
								<tr bgcolor="#ff8000">
									<td>
										<xsl:value-of select="@tema"/>
									</td>
									<td>
										<xsl:value-of select="enunciado"/>
									</td>
								</tr>
							</xsl:when>
						</xsl:choose>

					</xsl:for-each>
					<xsl:for-each select="pregunta">
						<xsl:choose>
							<xsl:when test='@tema="tema3"'>
								<tr bgcolor="#ffff00">
									<td>
										<xsl:value-of select="@tema"/>
									</td>
									<td>
										<xsl:value-of select="enunciado"/>
									</td>
								</tr>
							</xsl:when>
						</xsl:choose>

					</xsl:for-each>
					<xsl:for-each select="pregunta">
						<xsl:choose>
							<xsl:when test='@tema="tema4"'>
								<tr bgcolor="#80ff00">
									<td>
										<xsl:value-of select="@tema"/>
									</td>
									<td>
										<xsl:value-of select="enunciado"/>
									</td>
								</tr>
							</xsl:when>
						</xsl:choose>

					</xsl:for-each>
					<xsl:for-each select="pregunta">
						<xsl:choose>
							<xsl:when test='@tema="tema5"'>
								<tr bgcolor="#00ff80">
									<td>
										<xsl:value-of select="@tema"/>
									</td>
									<td>
										<xsl:value-of select="enunciado"/>
									</td>
								</tr>
							</xsl:when>
						</xsl:choose>

					</xsl:for-each>
					<xsl:for-each select="pregunta">
						<xsl:choose>
							<xsl:when test='@tema="tema6"'>
								<tr bgcolor="#ff00ff">
									<td>
										<xsl:value-of select="@tema"/>
									</td>
									<td>
										<xsl:value-of select="enunciado"/>
									</td>
								</tr>
							</xsl:when>
						</xsl:choose>

					</xsl:for-each>

				</table>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>

