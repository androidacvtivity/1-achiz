
SELECT
    D.CUIIO,
    COUNT (D.CUIIO) AS CNT

FROM
  VW_DATA_ALL  D

WHERE
  (D.PERIOADA=:PERIOADA          ) AND
--  (D.CUIIO=:CUIIO                ) AND
  --(D.CUIIO_VERS=:CUIIO_VERS     OR :CUIIO_VERS = -1) AND
  (D.FORM = :FORM               ) 
 -- (D.FORM_VERS=:FORM_VERS ) AND
--  (:CAPITOL=:CAPITOL            OR :CAPITOL=:CAPITOL) AND
--  (:CAPITOL_VERS=:CAPITOL_VERS  OR :CAPITOL_VERS <>:CAPITOL_VERS) AND
--  (:ID_MD=:ID_MD) AND 
--  D.FORM IN (54)  
  
--  D.CAPITOL IN (1076)
  
--  AND D.CUIIO = 38975129

   GROUP BY 
   
   D.CUIIO 
   
   
   
   ORDER BY 
   COUNT (D.CUIIO) DESC ,
   D.CUIIO   
   
   
