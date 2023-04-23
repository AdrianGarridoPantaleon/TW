<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template match="/">
		<xsl:apply-templates/>
	</xsl:template>

	<xsl:template match="cuestionario">
		<html>
			<head>
				<title>Avanzado</title>
			</head>
			<style>
			table, th, td
			{
  			
  				border-collapse: collapse;
			}
			</style>

			<body>

				<xsl:for-each select="pregunta">
					<xsl:choose>
						<xsl:when test='@tipo!="ordenar"'>
							<table border="1" width="50%">
								<tr bgcolor="#c0c0c0">
									<td colspan="2" width="100%">
										<xsl:value-of select="enunciado"/>
									</td>

								</tr>

								<xsl:choose>
									<xsl:when test='@tipo="booleana"'>
										<br/>
										<tr>
											<td width="100%">
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp1"/>
												</label>
											</td>
											<td>
												<input type="radio" name="pregunta1"/>
											</td>
										</tr>
										<tr>
											<td>
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp2"/>
												</label>
											</td>
											<td>
												<input type="radio" name="pregunta1"/>
											</td>
										</tr>

									</xsl:when>

									<xsl:when test='@tipo="numerica"'>
										<br/>
										<tr>
											<td width="100%">
												<input type="number" id="pregunta2" min="{respuesta/respnum/@min}" max="{respuesta/respnum/@max}"/>

											</td>
										</tr>
									</xsl:when>
									<xsl:when test='@tipo="libre"'>
										<br/>
										<tr>
											<td>
												<textarea rows="{respuesta/resplibre/@rows}" cols="{respuesta/resplibre/@cols}"></textarea>
											</td>
										</tr>
									</xsl:when>
									<xsl:when test='@tipo="test_unica"'>
										<br/>
										<tr>
											<td width="100%">
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp1"/>
												</label>
											</td>
											<td>
												<input type="radio" name="pregunta1"/>
											</td>
										</tr>
										<tr>
											<td>
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp2"/>
												</label>
											</td>
											<td>
												<input type="radio" name="pregunta1"/>
											</td>
										</tr>
										<tr>
											<td>
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp3"/>
												</label>
											</td>
											<td>
												<input type="radio" name="pregunta1"/>
											</td>
										</tr>
										<tr>
											<td>
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp4"/>
												</label>
											</td>
											<td>
												<input type="radio" name="pregunta1"/>
											</td>
										</tr>
									</xsl:when>
									<xsl:when test='@tipo="test_multiple"'>
										<br/>
										<tr>
											<td width="100%">
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp1"/>
												</label>
											</td>
											<td>
												<input type="checkbox" name="pregunta1"/>
											</td>
										</tr>
										<tr>
											<td>
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp2"/>
												</label>
											</td>
											<td>
												<input type="checkbox" name="pregunta1"/>
											</td>
										</tr>
										<tr>
											<td>
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp3"/>
												</label>
											</td>
											<td>
												<input type="checkbox" name="pregunta1"/>
											</td>
										</tr>
										<tr>
											<td>
												<label for="pregunta1">
													<xsl:value-of select="respuesta/resp4"/>
												</label>
											</td>
											<td>
												<input type="checkbox" name="pregunta1"/>
											</td>
										</tr>
									</xsl:when>

								</xsl:choose>

							</table>
						</xsl:when>
					</xsl:choose>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>

