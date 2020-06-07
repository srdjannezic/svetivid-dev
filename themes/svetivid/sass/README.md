# SASS STRUCTURE and NAMING CONVENTION

To build SASS I used BUILDING BLOCKS logic and BEM methodology naming convention.

## BUILDING BLOCKS

Basic building blocks here actually are components and blocks. Blocks represent big unity that conists many small parts.
For example HEADER and FOOTER and in this case mediaWALL all of them are complex unity that are compound of smaller parts. These parts can exist only in them or anywhere on the site.
These small parts can also be COMPONENTS (acutally if parts exist not only in one block they are componets).
```
BLOCKS: header, footer, mainWall
```
## COMPONENTS

Componets are small pieces of blocks usually. They are cells of project that are repeated in many places of course with modification which is realized through the block to which they belong.

```
COMPONENTS:  media, btn, common, ...
```
## BEM METODOLOGY

BEM stands for “Block”, “Element”, “Modifier”. The BEM methodology is a popular naming convention for classes in HTML and CSS. 

https://en.bem.info/methodology/

Main principles:
```
#.block (independent entity, a “building block” of an application. A block can be either simple or compound (containing other blocks).)

#.block__element (An element is a part of a block. Elements are context-dependent: they only make sense in the context of the block that they belong to.)

#.block__element--modifier (A Modifier is a property of a block or an element that alters its look or behavior. A modifier has both a name and a value.)
```
