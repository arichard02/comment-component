��/ * 
 
 T h e   j o b   o f   t h e   c o m m e n t   l i s t   i s   t o : 
 
 1 .   A t   t h e   v e r y   b e g i n n i n g ,   d r a w   a l l   t h e   c o m m e n t s . 
 
 2 .   I f   i t   g e t s   n o t i f i e d   t h a t   a   n e w   c o m m e n t   h a s   b e e n   c r e a t e d ,   
 
       i t   s h o u l d   d r a w   a   n e w   c o m m e n t   a t   t h e   t o p . 
 
 * / 
 
 
 
 e x p o r t   d e f a u l t   c l a s s   C o m m e n t L i s t   { 
 
     c o n s t r u c t o r ( s t a t e M a n a g e r )   { 
 
         / /   w h e n   t h e   c o m m e n t   l i s t   i s   f i r s t   c r e t a e d   t h e   c o m m e n t   l i s t   t e l l s   t h e   s t a t e   m a n a g e r   t h a t   w h e n   t h e   " c o m m e n t   u p d a t e d "   e v e n t   h a p p e n s ,   i t   s h o u l d   i n v o k e   t h e   " c o m m e n t s - u p d a t e d " 
 
         / /   t h e n   t h e   c o m m e n t   l i s t   i s   g o i n g   t o   s u b s c r i b e   t o   t h e   " c o m m e n t   a d d e d "   e v e n t . 
 
         s t a t e M a n a g e r . s u b s c r i b e ( ' c o m m e n t - a d d e d ' ,   t h i s . r e d r a w . b i n d ( t h i s ) ) ; 
 
 
 
         t h i s . r e d r a w ( s t a t e M a n a g e r . c o m m e n t s ) ; 
 
     } 
 
 
 
     r e d r a w ( c o m m e n t s )   { 
 
         / / t h e   " r e d r a w "   m e t h o d   w i l l   C L E A R   O U T   T H E   O L D   C O M M E N T S   a n d   r e d r a w   w i t h   t h e   n e w   c o m m e n t s . 
 
         d o c u m e n t . q u e r y S e l e c t o r ( ' . c o m m e n t s ' ) . i n n e r H T M L   =   " " ; 
 
         / /   w h e n   a   n e w   i n s t a n c e   o f   C o m m e n t L i s t   i s   c r e a t e d , 
 
         / /   i t   n e e d s   t o   k n o w   w h a t   c o m m e n t s   i t   s h o u l d   d r a w . 
 
         / /   i t   s h o u l d   d r a w   t h o s e   c o m m e n t s . 
 
         c o n s o l e . l o g ( c o m m e n t s ) ; 
 
 
 
         f o r   ( l e t   i   =   0 ;   i   <   c o m m e n t s . l e n g t h ;   i + + )   { 
 
           
 
             / /   c r e a t i n g   a n   H T M L   r e p r e s e n t a t i o n   o f   i t 
 
             l e t   t e m p l a t e   =   `                             < c u s t o m - c o m m e n t                                 n a m e   =   " $ { c o m m e n t s [ i ] . n a m e } "                               e m a i l   =   " $ { c o m m e n t s [ i ] . e m a i l } "                               c o m m e n t   =   " $ { c o m m e n t s [ i ] . c o m m e n t } "                               t i m e s t a m p   =   " $ { c o m m e n t s [ i ] . t i m e s t a m p } " >                               < / c u s t o m - c o m m e n t >                             ` ; 
 
                 c o n s o l e . l o g ( t e m p l a t e ) ; 
 
             / /   w e   n e e d   t o   a p p e n d   i t   t o   t h e   D O M 
 
             d o c u m e n t 
 
                 . q u e r y S e l e c t o r ( " . c o m m e n t s " ) 
 
                 . i n s e r t A d j a c e n t H T M L ( " a f t e r b e g i n " ,   t e m p l a t e ) ; 
 
         } 
 
     } 
 
 } 
