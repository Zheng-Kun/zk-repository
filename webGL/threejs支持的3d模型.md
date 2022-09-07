# threejs 支持的3d模型1.  

1. 3DM
1. AMF
1. 3MF
1. BVH
1. Collada
1. DDSL
1. DRACO
1. EXR
1. FBX
1. GCode
1. GLTF
1. IFC
1. KMZ
1. KTX2
1. KTX
1. LDraw
1. LogLuv
1. Lottie
1. LUT3d
1. LUTCube
1. LWO
1. MD2
1. MDD
1. MMD
1. MTL
1. NRRD
1. OBJ
1. PCD
1. PDB
1. PLY
1. PRWM
1. PVR
1. RGBE
1. RGBM
1. STL
1. SVG
1. TDS
1. TGA
1. Tilt
1. TTF
1. VOX
1. VRML
1. VTX
1. XYZ







## ***\*glTF (.gltf)\****

glTF是一种可以减少3D格式中与渲染无关的冗余数据并且在更加适合OpenGL簇加载的一种3D文件格式。glTF 就是三维文件的 JPEG ，三维格式的 MP3。在没有glTF的时候，大家都要花很长的的时间来处理模型的载入。此外，glTF是对近二十年来各种3D格式的总结，使用最优的数据结构，来保证最大的兼容性以及可伸缩性。这就好比是本世纪初xml的提出。glTF使用json格式进行描述，也可以编译成二进制的内容：bglTF。glTF可以包括场景、摄像机、动画等，也可以包括网格、材质、纹理，甚至包括了渲染技术（technique）、着色器以及着色器程序。同时由于json格式的特点，它支持预留一般以及特定供应商的扩展。

目前gltf格式已经升级到了gltf2.0，具备更好的兼容和特性，未来属于非常有可能一统模型格式的主流推荐格式。

## ***\*FBX(.fbx)\****

FBX 是 FilmBoX 这套软件所使用的格式，后改称 Motionbuilder。因为Motionbuilder扮演的是动作制作的平台，所以在前端的modeling和后端的rendering也都有赖于其它软件的配合,FBX最大的用途是用在诸如在 Max、Maya、Softimage 等软件间进行模型、材质、动作和摄影机信息的互导，这样就可以发挥 Max 和 Maya 等软件的优势。可以说，FBX 方案是非常好的互导方案。目前threejs也支持fbx的导出动画，非常不错。

## ***\*obj (.obj)\****

OBJ文件是Alias|Wavefront公司为它的一套基于工作站的3D建模和动画软件”Advanced Visualizer”开发的一种标准3D模型文件格式，很适合用于3D软件模型之间的互导。目前几乎所有知名的3D软件都支持OBJ文件的读写。OBJ文件是一种文本文件，可以直接用写字板打开进行查看和编辑修改。

通用性很强的一种格式，注意导出的同时需要同时保存obj格式文件和mtl文件。

## ***\*obj2 (.obj)\****

同上

## ***\*stl(.stl)\****

STL是用三角网格来表现3D CAD模型。文件格式简单，只能描述三维物体的几何信息，不支持颜色材质等信息，是计算机图形学处理CG、数字几何处理如CAD、 数字几何工业应用, 如三维打印机支持的最常见文件格式。

## ***\*3ds (.3ds)\****

3ds是3ds max通用储存文件格式。使用的范围更宽，可被更多的软件识别使用.

## ***\*amf (.amf)\****

AMF是以目前3D打印机使用的“STL”格式为基础、弥补了其弱点的数据格式，新格式能够记录颜色信息、材料信息及物体内部结构等。AMF标准基于XML（可扩展标记语言）。

## ***\*3mf (.3mf)\****

由微软牵头的3MF联盟，于2015年推出全新的3D打印格式——3MF（3D Manufacturing Format）,相较于STL格式，3MF档案格式能够更完整地描述3D模型，除了几何信息外，还可以保持内部信息、颜色、材料、纹理等其它特征。3MF同样也是一种基于XML的数据格式。

## ***\*assimp & assimp2json (.assimp |.json)\****

Assimp是一个强大的模型加载和转换库，支持多种格式的加载和转换，可通过c++进行调用开发。assimp2json顾名思义就是assimp格式的json格式导出。

## ***\*awd (.awd)\****

AWD是一种用于三维场景的二进制格式，并且通常与[AWD](http://away3d.com/)引擎一起使用。

## ***\*Babylon (.babylon)\****

微软的基于webgl的开发框架. [Babylon.js](https://www.cnblogs.com/chencarl/p/www.babylonjs.com)

## ***\*BVH (.bvh)\****

BVH是BioVision等设备对人体运动进行捕获后产生文件格式的文件扩展名,BVH文件包含角色的骨骼和肢体关节旋转数据。BVH 是一种通用的人体特征动画文件格式,，广泛地被当今流行的各种动画制作软件支持。通常可从记录人类行为运动的运动捕获硬件获得。

## ***\*Collada(.dae |.xml)\****

COLLADA™ 是面向交互式 3D 应用程序的基于 XML 的数字资产交换方案，使 3D 创作应用程序可以自由地交换数字资产而不损失信息 – 使多种DCC和3D处理软件包可以组合成强大的工具链管道。DAE 是纯文本的模型格式，其本质就是一个单纯的xml文件。相比fbx，对dae格式模型的载入我们拥有非常高的自由控制，这也是最复杂的地方。基本上，dae文件内一开始就把数据分成了好几大块。对我们来说最为有用的是VisualScenes(包含场景骨骼节点树)、Nodes(与VisualScenes类似，两者或互为补充)、Geometries（网格数据）、Materials/Effects/Images（材质相关信息）、Controllers（骨骼信息数据）、Animations（动画数据）、AnimationClips（全局的动画信息），其中静态模型一般也就包括VisualScenes和Geometries。(有C++API)

## ***\*OpenCTM (.ctm)\****

OpenCTM格式的3D模型文件,OpenCTM 格式文件是二进制文件，相比于 stl 格式的文件，它将不承载除模型三角面片信息以外的信息,一个 OpenCTM 文件仅包含一个 Mesh,一个文件主要分成Mesh 的顶点信息和Mesh 的面片信息。(有C++API)

## ***\*draco(.drc)\****

Google公司推出的3d模型压缩利器，压缩比甩gzip几条街，100M的.obj压缩后大约5M。

## ***\*GCode(.gcode)\****

GCODE是用于3d打印的文件，存储有3d打印机的运动命令和坐标等。

## ***\*Clara(.json)\****

Clara.io有可建立于桌面的3D创建工具，它是一个整合性的3D内容创作软件，不仅仅是单一用途的应用程序，还是算图或layout工具，并由许多外挂模块和语法所组成。大多3D artists不需太多适应时间就可熟悉Clara.io，并获得更多的便利功能。由于Clara.io是设计在网络浏览器上运行，所以用户可随时随地接触到它，无需设定、可跨平台使用，自动存储所有的制作步骤，让你可以实时与他人协同作业，以及拥有无限制的云端运算需求。

## ***\*KMZ(.kmz)\****

kmz是谷歌kml语言文件的zip压缩格式，常用于的谷歌地图文件，由kml语言编写，KML是标记语言（Keyhole Markup Language）的缩写，最初由Keyhole公司开发，是一种基于XML 语法与格式的、用于描述和保存地理信息（如点、线、图像、多边形和模型等）的编码规范，可以被 Google Earth 和 Google Maps 识别并显示。

## ***\*LDraw(.mpd)\****

lego的3D模型库

## ***\*LightWave(.lwo)\****

lwoss是LightWave 3D模型美国NewTek公司开发的LightWave 3D是一款高性价比的三维动画制作软件，它的功能非常强大，是业界为数不多的几款重量级三维动画软件之一。

## ***\*MD2 (.md2)\****

MD2文件是QuakeП专用的文件格式，QuakeП中复杂的三维场景就是通过对它的读取产生的。

## ***\*MMD(.pmd + .vmd)\****

MikuMikuDance是日本人樋口优所开发，将VOCALOID2的初音未来等角色制作3D模组的免费软件

## ***\*nrrd (.nrrd)\****

NRRD格式包含了一个单独的头文件和若干个可以被结合在一起或者分开的图像文件。NRRD头文件为科学可视化和图像处理准确地表征了N维光栅信息。常用于医疗设备的多层切片数据。

## ***\*sea3d(.sea3d)\****

sea3d为游戏而生的一种开源的格式与工具，可导出动画, 纹理, 材质, 骨骼 ( Skin ), 顶点动画, 变形, 相机, 光源, 环境和辅助.

## ***\*pcd (.pcd)\****

Point Cloud Data即3d点云图像。

## ***\*PDB(.pdb)\****

PDB是protein data base 的简写，在生物学软件中，一般把蛋白质的三维结构信息用pdb文件保存。本质是一种ASICLL码文件，可以用普通的文本编辑器编辑，也可以用专业软件编辑。

## ***\*PlayCanvas(.json)\****

PlayCanvas是一款开源游戏引擎，完全基于浏览器；

## ***\*ply (.ply)\****

PLY 是一种电脑档案格式，全名为多边形档案（Polygon File Format）或 斯坦福三角形档案（Stanford Triangle Format）。 该格式主要用以储存立体扫描结果的三维数值，透过多边形片面的集合描述三维物体，与其他格式相较之下这是较为简单的方法。它可以储存的资讯包含颜色、透明度、表面法向量、材质座标与资料可信度，并能对多边形的正反两面设定不同的属性。作为OBJ 格式的升级版！PLY格式受 Wavefront .obj 格式的启发，但改进了Obj格式所缺少的对任意属性及群组的扩充性。因此PLY格式发明了”property”及”element”这两个关键词，来概括“顶点、面、相关资讯、群组”的概念。

## ***\*prwm(.prwm)\****

Packed Raw WebGL Model 是一种二进制的3d模型文件， 它是为web中的几何外形设计的，主要特点是解析和加载速度特别快，原理是对元素进行索引和数组话操作。 [prwm](https://github.com/kchapelier/PRWM)

## ***\*vrm(.vrm)\****

vrm是日本推行的3D虚拟形象的新格式标准，打造3D人形角色行业标准

## ***\*vrml(.vrml)\****

VRML（Virtual Reality Modeling Language）即虚拟现实建模语言。是一种用于建立真实世界的场景模型或人们虚构的三维世界的场景建模语言，也具有平台无关性。它可以做很多事并且支持很多效果.但是事实上它并未得到广泛应用.

## ***\*vtk\****

VTK，全称是Visualization Toolkit，即可视化工具包。是一个开源、跨平台、可自由获取、支持并行处理的图形应用函数库。

## ***\*x\****

.x文件是微软为DX开发提供的一种3D文件.包括顶点\纹理、动作。



「计算机网络」https://www.aliyundrive.com/s/Uf8kqRNFayL 提取码: 48fg
点击链接保存，或者复制本段内容，打开「阿里云盘」APP ，无需下载极速在线查看，视频原画倍速播放。

「c 复试」https://www.aliyundrive.com/s/yQgYnrSdqm5 提取码: 48fg
点击链接保存，或者复制本段内容，打开「阿里云盘」APP ，无需下载极速在线查看，视频原画倍速播放。