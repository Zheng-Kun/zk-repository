---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
test2 ^dkCsIdsr

release-xx ^jFDLcqqS

hotfix2 ^SLYc1V2n

features ^fTZNc9Xj

从develop到feature或者test的合并没有限制，从test到feature的合并没有限制 ^WagqSFwY

f3 ^jUzrAMkF

f6 ^DgktlVQT

f2 ^K8xkmHkN

Tag0.1 ^DfiEJ1LM

master 作为发布分支使用 ^cgsaaSZD

develop2 ^unMsjTQu

init ^NUcFb5Iv

tag4 ^hOatKQKL

tagxx1.1 ^VHjAdFHc

f1 ^QCOWxQzG

测试通过合入develop等待发布 ^U1rWqu1V

master ^bLBl2z8M

develop ^9qwUswFt

tag0.2 ^h7VvxEAA

hotfix ^5fd5P8Qb

cherrypick ^EB5ErEnf

hotfix1 ^6o4SCA8R

tagxx1 ^zX1Z9KRj

revert ^axzmWKaG

tag3 ^98HwoQw7

【建议】当feater分支已合并到test并通过测试，合到develop后，推荐删除，新业务的开发从develop拉出新分支开发 ^E3o0BjG4

f5 ^4IiI4Q5e

f4 ^A0cdj6By

【向右合并】所有的向右合并需要先向左合并，在左边分支解决完冲突后再向右合并，如果是release或develop的向左合并出现冲突，解决冲突后需要将冲突范围通知到QA并做简单的回归测试后再向右合并 ^JjwI3M4U

直接在hotfix测试，测试通过后合并到发布分支，并同步代码到develop分支，hotfix为临时分支，使用过后务必删除 ^VlGYHEX0

同一批提测内容同时合并到test并部署 ^KdHq0UN6

需要发布企业版定制版时，从develop拉新的develop分支与releease分支作为发布分支，同时需要对应新的test分支 ^ZJwcpfWr

如果并行的测试分支为临时分支则使用后直接删除，不需要这一代码的操作，如果为固定的测试分支，则需要在复测通过后同步测试分支的代码 ^bP4LqYcP

当多个不同的版本release出现相同的bug时：
1、在任意release分支拉出hotfix分支进行修复，修复并通过测试后合回对应release
2、在其他需要修复的release中也拉出hotfix分支
3、将为【1】中的hotfix对应的修复提交cherrypick到【2】拉出的hotfix分支中，测试通过后也合并回对应的release
4、将最新的hotfix变更同步回对应的devlop分支 ^pqWwdvrG

test ^MQ9BISi1

回滚代码使用revert，避免使用reset ^8PqLoKpV

f5 ^KlCzGXfa

tag1 ^YXWQEZhB

【并行测试】当需要并行测试时，拉出新的test分支进行测试工作，测试完成后将测试分支合并到一个主test分支，合并到主test后需要做简单的复测，复测时还是在feater改bug，改完合到主test分支测试，测试完后正常合到develop等待发布 ^4bkNShCv

如果当前featuer有需要提交测试的内容，但是被提测节点阻塞时，且后续的开发需要基于当前的feature内容，需要在当前feature上拉新的分支开发，以避免影响提测 ^7rf2vpja

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.1.3",
	"elements": [
		{
			"type": "rectangle",
			"version": 1168,
			"versionNonce": 1540465310,
			"isDeleted": false,
			"id": "t0zIdseNikxIfBu9gCcPw",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 535.2447415809293,
			"y": -624.7842038901135,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 42.942032961638596,
			"height": 63.11676167283614,
			"seed": 1059001410,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1717151637229,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 1222,
			"versionNonce": 1032183362,
			"isDeleted": false,
			"id": "OhWBVLkHqRP8HYoL3igO7",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 257.39249846499797,
			"y": -500.58803720941415,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 384.71882587876166,
			"height": 810.7969961274982,
			"seed": 57427138,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "FTiNMt1AasdfAXYUcovsq",
					"type": "arrow"
				},
				{
					"id": "UKX4Jf9Cr4X16rJzjMgbR",
					"type": "arrow"
				}
			],
			"updated": 1717151637229,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 1011,
			"versionNonce": 754949854,
			"isDeleted": false,
			"id": "ek5ICOG67i5nB_xP9XqJD",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 538.0410542771394,
			"y": 150.18555654611447,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 46.65716914132522,
			"height": 75.92512425503905,
			"seed": 571564702,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": null,
			"updated": 1717151637229,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 1118,
			"versionNonce": 1534379522,
			"isDeleted": false,
			"id": "ouqqdH4MPBGYe7HQSG7ff",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 328.45078633954665,
			"y": -412.008959397953,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 53.02323889199991,
			"height": 178.60034145257006,
			"seed": 1293078274,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "f2rtc5rP_7_pLzZ7D0P_a",
					"type": "arrow"
				},
				{
					"id": "SFCvxDfHeNCyJLXg6WGor",
					"type": "arrow"
				}
			],
			"updated": 1717151637229,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 635,
			"versionNonce": 1470370590,
			"isDeleted": false,
			"id": "negJsExATClD44iOZ5EzJ",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1047.8491662353977,
			"y": -139.93655181626923,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 204.22007189137528,
			"height": 352.9815211831933,
			"seed": 99668126,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "FTiNMt1AasdfAXYUcovsq",
					"type": "arrow"
				}
			],
			"updated": 1717151637229,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 948,
			"versionNonce": 1924183490,
			"isDeleted": false,
			"id": "Hc5BtqGeMd1GqK426PyJA",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 529.8543922055514,
			"y": -84.81220737945313,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 46.65716914132522,
			"height": 75.92512425503905,
			"seed": 1523218114,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": null,
			"updated": 1717151637229,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 339,
			"versionNonce": 1445986142,
			"isDeleted": false,
			"id": "QakXxObGF8USAiqvDE9lN",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 709.6408236181353,
			"y": -964.099592264726,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 259.31577446992526,
			"height": 51.235541554257225,
			"seed": 997971678,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637229,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "CaVkTGHpnnFHstkhdQlTs",
				"focus": -0.46394490559768314,
				"gap": 2.7656618016393804
			},
			"endBinding": {
				"elementId": "CU_i0j52KV5Sw-kO7v9mq",
				"focus": 0.05992282004377179,
				"gap": 4.226996899861195
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-259.31577446992526,
					51.235541554257225
				]
			]
		},
		{
			"type": "rectangle",
			"version": 616,
			"versionNonce": 1683533186,
			"isDeleted": false,
			"id": "POvdbMr5IajHocviriZRo",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 540.0631580167956,
			"y": -996.3968478667758,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 44.23917782801152,
			"height": 270.3267754914075,
			"seed": 1369418974,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "SFCvxDfHeNCyJLXg6WGor",
					"type": "arrow"
				}
			],
			"updated": 1717151637229,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 227,
			"versionNonce": 754213790,
			"isDeleted": false,
			"id": "Cu0LOV14I3RoeuYuOkv1s",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 542.610556447377,
			"y": -1208.6190221307868,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 40.00727071518087,
			"height": 110.47119142502265,
			"seed": 934652290,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "f2rtc5rP_7_pLzZ7D0P_a",
					"type": "arrow"
				}
			],
			"updated": 1717151637229,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 326,
			"versionNonce": 363572546,
			"isDeleted": false,
			"id": "bLBl2z8M",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 931.9562549730729,
			"y": -1462.3231867774293,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 67.69993591308594,
			"height": 25,
			"seed": 725370690,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "HRBFQaDGZeuEJQu2x8bhn",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "master",
			"rawText": "master",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "master",
			"lineHeight": 1.25
		},
		{
			"type": "text",
			"version": 393,
			"versionNonce": 773996510,
			"isDeleted": false,
			"id": "9qwUswFt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 685.3122390653053,
			"y": -1465.4779393940619,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 69.919921875,
			"height": 25,
			"seed": 1580352478,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "develop",
			"rawText": "develop",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "develop",
			"lineHeight": 1.25
		},
		{
			"type": "text",
			"version": 563,
			"versionNonce": 1812509954,
			"isDeleted": false,
			"id": "fTZNc9Xj",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 296.2862841963837,
			"y": -1467.4380715061418,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 87.05990600585938,
			"height": 25,
			"seed": 1585757330,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "features",
			"rawText": "features",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "features",
			"lineHeight": 1.25
		},
		{
			"type": "text",
			"version": 581,
			"versionNonce": 1036686366,
			"isDeleted": false,
			"id": "MQ9BISi1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 528.6965098732037,
			"y": -1463.852831982817,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 44.39994812011719,
			"height": 25,
			"seed": 142528258,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "test",
			"rawText": "test",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "test",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 233,
			"versionNonce": 1223607490,
			"isDeleted": false,
			"id": "CAc3v7rYwYLYrdgxyriIw",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 956.5883238071781,
			"y": -1408.7808840072917,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 101999042,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "VR-FI2fn4Pi51WwjJNg8r",
					"type": "arrow"
				},
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "Jw2CQm2JXU6lzCeHGxxbI",
					"type": "arrow"
				},
				{
					"id": "GPghsHKL_8iszHP-TJ-il",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 588,
			"versionNonce": 366895198,
			"isDeleted": false,
			"id": "GPghsHKL_8iszHP-TJ-il",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1080.562897142952,
			"y": -1409.8340655481006,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100.52997317071367,
			"height": 12.738185520464413,
			"seed": 1557976258,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "mcb18y2IbBUrGYRkV6EAV",
				"gap": 3.956483999195143,
				"focus": 0.3353710831055354
			},
			"endBinding": {
				"elementId": "CAc3v7rYwYLYrdgxyriIw",
				"gap": 5.034392340095916,
				"focus": 0.4283929439763202
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-100.52997317071367,
					12.738185520464413
				]
			]
		},
		{
			"type": "rectangle",
			"version": 479,
			"versionNonce": 100457602,
			"isDeleted": false,
			"id": "mcb18y2IbBUrGYRkV6EAV",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1084.519381142147,
			"y": -1424.5065478856022,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 55.99239828999043,
			"height": 35.54894438449423,
			"seed": 296283266,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "GPghsHKL_8iszHP-TJ-il",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "NUcFb5Iv"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 412,
			"versionNonce": 170828958,
			"isDeleted": false,
			"id": "NUcFb5Iv",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1100.7555857803063,
			"y": -1416.7320756933552,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 23.519989013671875,
			"height": 20,
			"seed": 1285295170,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "init",
			"rawText": "init",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "mcb18y2IbBUrGYRkV6EAV",
			"originalText": "init",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 338,
			"versionNonce": 1894906946,
			"isDeleted": false,
			"id": "kKMKqCPwcE0bUXHFxiB9P",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 940.6778151328028,
			"y": -1393.2970316264755,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 204.34841694151737,
			"height": 45.29446423998661,
			"seed": 80226178,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.20942462720613297,
				"gap": 15.55172942342159,
				"elementId": "PiuN5VXCsZK4KZSsU_YJg"
			},
			"endBinding": {
				"focus": 0.3953989312986491,
				"gap": 4.544636113743625,
				"elementId": "4bFpT96_2v7bvUy9MnG0G"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-204.34841694151737,
					45.29446423998661
				]
			]
		},
		{
			"type": "ellipse",
			"version": 321,
			"versionNonce": 1282171102,
			"isDeleted": false,
			"id": "4bFpT96_2v7bvUy9MnG0G",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 713.2162536324362,
			"y": -1358.1636112025067,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 519489886,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "N46_2vTLzCOEaCjxvJfVg",
					"type": "arrow"
				},
				{
					"id": "kKMKqCPwcE0bUXHFxiB9P",
					"type": "arrow"
				},
				{
					"id": "uxKC_0IAp83Qp6MdaqHj1",
					"type": "arrow"
				},
				{
					"id": "2T98bAPdP7Qe8GHJp_iiH",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 525,
			"versionNonce": 1202529282,
			"isDeleted": false,
			"id": "c7kk52XgVXehI_Q9EVrfG",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 705.8769268782123,
			"y": -1345.1572452946084,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 250.87279126489193,
			"height": 41.701621264486675,
			"seed": 2031673602,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.08739050039814006,
				"gap": 7.717599773497859,
				"elementId": "EO8sNgeWUrsXn_FTcEMAX"
			},
			"endBinding": {
				"focus": 0.045421243593515334,
				"gap": 5.49526182925171,
				"elementId": "E3COVTUB6U1I2ql_PHvqh"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-250.87279126489193,
					41.701621264486675
				]
			]
		},
		{
			"type": "text",
			"version": 363,
			"versionNonce": 807965982,
			"isDeleted": false,
			"id": "QCOWxQzG",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 202.23081282051328,
			"y": -1415.1514437580263,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 12.111984252929688,
			"height": 20,
			"seed": 1507467550,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "4OD-AaThKlsKnXvWmR15I",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "f1",
			"rawText": "f1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f1",
			"lineHeight": 1.25
		},
		{
			"type": "text",
			"version": 305,
			"versionNonce": 875385794,
			"isDeleted": false,
			"id": "K8xkmHkN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 353.01816157133953,
			"y": -1416.5124357551072,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 19.167984008789062,
			"height": 20,
			"seed": 892885470,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "y2XcU-aFumBGtdStw5_PF",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "f2",
			"rawText": "f2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f2",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 598,
			"versionNonce": 1859404126,
			"isDeleted": false,
			"id": "JwSNB46JUKNqtddxZKWGs",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 431.8849548043112,
			"y": -1311.0985629847332,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1599740510,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "3mJsMLZPqMueHxYWso8Ir",
					"type": "arrow"
				},
				{
					"id": "-tDxLSbWPqcw9utBEfMzq",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 714,
			"versionNonce": 1217497986,
			"isDeleted": false,
			"id": "HdhEoVIkFTejcTp910TlW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 357.1475585640768,
			"y": -1260.660025387077,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 98681374,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "fp_TK7S8VgxBb7RWdZF6X",
					"type": "arrow"
				},
				{
					"id": "y2XcU-aFumBGtdStw5_PF",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 94,
			"versionNonce": 1807771038,
			"isDeleted": false,
			"id": "53iNpWPY8NAGanri2vG5c",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 707.0044999741115,
			"y": -1338.3817306270946,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 327.7300778636036,
			"height": 85.10395485519643,
			"seed": 1489467330,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.13075797942570522,
				"gap": 7.088289956225969,
				"elementId": "4bFpT96_2v7bvUy9MnG0G"
			},
			"endBinding": {
				"focus": 0.13385398259849043,
				"gap": 3.69543403351377,
				"elementId": "HdhEoVIkFTejcTp910TlW"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-327.7300778636036,
					85.10395485519643
				]
			]
		},
		{
			"type": "ellipse",
			"version": 818,
			"versionNonce": 2065222466,
			"isDeleted": false,
			"id": "yAcCEYVtKriqHCV3Vy9hs",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 356.16080319298305,
			"y": -1219.5905521204754,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 2146843906,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "fp_TK7S8VgxBb7RWdZF6X",
					"type": "arrow"
				},
				{
					"id": "vKKEa9oEYLGZT0IBp_Qep",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 722,
			"versionNonce": 2015232478,
			"isDeleted": false,
			"id": "jWrlpOMd9jJEouYj7uLJm",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 434.2063049019674,
			"y": -1256.60317113903,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1052672606,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "3mJsMLZPqMueHxYWso8Ir",
					"type": "arrow"
				},
				{
					"id": "LSY4vJHml18JO1Fc-7ayH",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 821,
			"versionNonce": 572658434,
			"isDeleted": false,
			"id": "qkC0GIwEoj96fiRbAY7hf",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 433.2243102730612,
			"y": -1209.0483005335614,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 284238302,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "eovn8B_fdd3YHCdCxH-5W",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 897,
			"versionNonce": 385750558,
			"isDeleted": false,
			"id": "prd_oPStLQZ19wqs7sgK_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 357.2848571480612,
			"y": -1169.3682315638348,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1415873182,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "mo7tVS1H7Tk0lzVv-uUVf",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 393,
			"versionNonce": 1881957058,
			"isDeleted": false,
			"id": "jUzrAMkF",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 429.17776012025604,
			"y": -1409.5324892194485,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 18.671981811523438,
			"height": 20,
			"seed": 1209624222,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "-tDxLSbWPqcw9utBEfMzq",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "f3",
			"rawText": "f3",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f3",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 817,
			"versionNonce": 1095869022,
			"isDeleted": false,
			"id": "MlWZ5kRGTTkOauCs4pMNw",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 193.371122738486,
			"y": -1303.3210135301513,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 927892994,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "I5l7KklKJgsTh8OXa1M9E",
					"type": "arrow"
				},
				{
					"id": "2T98bAPdP7Qe8GHJp_iiH",
					"type": "arrow"
				},
				{
					"id": "4OD-AaThKlsKnXvWmR15I",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 945,
			"versionNonce": 1876343426,
			"isDeleted": false,
			"id": "YXn4oUflANBrznhLtC4zy",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 197.4842207384898,
			"y": -1095.8412821442498,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 670515330,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 329,
			"versionNonce": 703178398,
			"isDeleted": false,
			"id": "2T98bAPdP7Qe8GHJp_iiH",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 707.5768460816994,
			"y": -1344.3843642378613,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 487.5298558468813,
			"height": 48.34023436776761,
			"seed": 748932958,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.30553471331916043,
				"gap": 6.255081651119761,
				"elementId": "4bFpT96_2v7bvUy9MnG0G"
			},
			"endBinding": {
				"focus": -0.043709781141627366,
				"gap": 8.216612438190477,
				"elementId": "MlWZ5kRGTTkOauCs4pMNw"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-487.5298558468813,
					48.34023436776761
				]
			]
		},
		{
			"type": "arrow",
			"version": 227,
			"versionNonce": 2145393218,
			"isDeleted": false,
			"id": "3mJsMLZPqMueHxYWso8Ir",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 440.82912385864586,
			"y": -1289.7144017661594,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0.118408203125,
			"height": 26.335052490234375,
			"seed": 772604638,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "JwSNB46JUKNqtddxZKWGs",
				"focus": 0.04344926181063619,
				"gap": 2.5618243676225596
			},
			"endBinding": {
				"elementId": "jWrlpOMd9jJEouYj7uLJm",
				"focus": -0.2668477718740175,
				"gap": 6.979151193862352
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.118408203125,
					26.335052490234375
				]
			]
		},
		{
			"type": "arrow",
			"version": 163,
			"versionNonce": 24584926,
			"isDeleted": false,
			"id": "LSY4vJHml18JO1Fc-7ayH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 444.1164663002687,
			"y": -1236.7942753148022,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0.46764070115159484,
			"height": 24.03718313684749,
			"seed": 11107202,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.04003114584522514,
				"gap": 1,
				"elementId": "jWrlpOMd9jJEouYj7uLJm"
			},
			"endBinding": {
				"focus": 0.26563774194417583,
				"gap": 4.80046866662777,
				"elementId": "ONTR_DTuQc3IVGVGekozq"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.46764070115159484,
					24.03718313684749
				]
			]
		},
		{
			"type": "arrow",
			"version": 214,
			"versionNonce": 1327989250,
			"isDeleted": false,
			"id": "fp_TK7S8VgxBb7RWdZF6X",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 364.66738069458336,
			"y": -1241.0532994712376,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0.222381591796875,
			"height": 19.6690673828125,
			"seed": 183092190,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "HdhEoVIkFTejcTp910TlW",
				"focus": 0.20329653402442546,
				"gap": 1
			},
			"endBinding": {
				"elementId": "yAcCEYVtKriqHCV3Vy9hs",
				"focus": -0.0471774692632947,
				"gap": 1.808231539651036
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.222381591796875,
					19.6690673828125
				]
			]
		},
		{
			"type": "arrow",
			"version": 163,
			"versionNonce": 982193950,
			"isDeleted": false,
			"id": "vKKEa9oEYLGZT0IBp_Qep",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 366.5062173293697,
			"y": -1197.3002491223583,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0.6069907974213606,
			"height": 24.974830728765482,
			"seed": 1876881602,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.07853235279703474,
				"gap": 3.5063897240743263,
				"elementId": "yAcCEYVtKriqHCV3Vy9hs"
			},
			"endBinding": {
				"focus": 0.09234036735952898,
				"gap": 3.941090741148985,
				"elementId": "prd_oPStLQZ19wqs7sgK_"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.6069907974213606,
					24.974830728765482
				]
			]
		},
		{
			"type": "arrow",
			"version": 513,
			"versionNonce": 1487663554,
			"isDeleted": false,
			"id": "I5l7KklKJgsTh8OXa1M9E",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 205.7832935731024,
			"y": -1278.7361015418287,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 2.7523938204675176,
			"height": 179.16126253095263,
			"seed": 1042309086,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.3104352238382483,
				"gap": 6.07935069897519,
				"elementId": "MlWZ5kRGTTkOauCs4pMNw"
			},
			"endBinding": {
				"focus": 0.21078043823765275,
				"gap": 3.852605215407122,
				"elementId": "YXn4oUflANBrznhLtC4zy"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					2.7523938204675176,
					179.16126253095263
				]
			]
		},
		{
			"type": "ellipse",
			"version": 908,
			"versionNonce": 1301709662,
			"isDeleted": false,
			"id": "8WgRXQauyB3JpbH7xCdMO",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 553.2457833605848,
			"y": -1127.1017885050799,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 52118302,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "cdf0gDx3oR0WOtt3zSeLQ",
					"type": "arrow"
				},
				{
					"id": "l3PhCwCd23xB8fu5A4r38",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 338,
			"versionNonce": 1603037570,
			"isDeleted": false,
			"id": "eovn8B_fdd3YHCdCxH-5W",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 451.65722749105373,
			"y": -1194.8409559576999,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 95.15130273057491,
			"height": 16.014023561152953,
			"seed": 2077409502,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.3424847919057966,
				"gap": 1,
				"elementId": "qkC0GIwEoj96fiRbAY7hf"
			},
			"endBinding": {
				"focus": -0.7157045988974773,
				"gap": 5.318882058087132,
				"elementId": "ONTR_DTuQc3IVGVGekozq"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					95.15130273057491,
					16.014023561152953
				]
			]
		},
		{
			"type": "arrow",
			"version": 136,
			"versionNonce": 2095736734,
			"isDeleted": false,
			"id": "hO-jzcIEZNZmXYedDJf8v",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 376.1743835367547,
			"y": -1155.1649912300795,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 176.0416858175131,
			"height": 33.42686981996121,
			"seed": 729706498,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.31380767552925043,
				"gap": 1.4065415900708498,
				"elementId": "prd_oPStLQZ19wqs7sgK_"
			},
			"endBinding": {
				"focus": -0.07379993010349917,
				"gap": 2.1409400639944156,
				"elementId": "8WgRXQauyB3JpbH7xCdMO"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					176.0416858175131,
					33.42686981996121
				]
			]
		},
		{
			"type": "arrow",
			"version": 416,
			"versionNonce": 1795680578,
			"isDeleted": false,
			"id": "ejN6J0FiJThN2JyuktjWC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 442.98796600809237,
			"y": -1187.3784007529787,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 1.0709097952362754,
			"height": 61.53930415081413,
			"seed": 52011742,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.024332827581568545,
				"gap": 2.8515098103740666,
				"elementId": "ONTR_DTuQc3IVGVGekozq"
			},
			"endBinding": {
				"elementId": "E3COVTUB6U1I2ql_PHvqh",
				"focus": -0.1520422132957174,
				"gap": 1.6341107447302967
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.0709097952362754,
					61.53930415081413
				]
			]
		},
		{
			"type": "ellipse",
			"version": 954,
			"versionNonce": 414696414,
			"isDeleted": false,
			"id": "E3COVTUB6U1I2ql_PHvqh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 436.36820065392055,
			"y": -1124.324560909538,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1865186946,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "eovn8B_fdd3YHCdCxH-5W",
					"type": "arrow"
				},
				{
					"id": "ejN6J0FiJThN2JyuktjWC",
					"type": "arrow"
				},
				{
					"id": "fQpbFPjSfPaiN6VOGtY-V",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 146,
			"versionNonce": 1115517186,
			"isDeleted": false,
			"id": "gzWytKwk_T37MZ5julPuh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 366.7363504215458,
			"y": -1149.0842138001776,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0.7924572384573594,
			"height": 34.83938565939229,
			"seed": 1128521502,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.03789486701017889,
				"gap": 1.4576251730433203,
				"elementId": "prd_oPStLQZ19wqs7sgK_"
			},
			"endBinding": {
				"focus": 0.05868298515309683,
				"gap": 2.9523301747452546,
				"elementId": "3BFCwLPF0n77ASn96HssJ"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.7924572384573594,
					34.83938565939229
				]
			]
		},
		{
			"type": "ellipse",
			"version": 969,
			"versionNonce": 1125095454,
			"isDeleted": false,
			"id": "3BFCwLPF0n77ASn96HssJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 356.0823424996237,
			"y": -1113.371680050163,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1267591298,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "7rKaEoEciLAY1f60Cmba-",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 655,
			"versionNonce": 1768685762,
			"isDeleted": false,
			"id": "cdf0gDx3oR0WOtt3zSeLQ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 564.3753305573642,
			"y": -1106.3053388807425,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.2781079627458212,
			"height": 35.02737523882092,
			"seed": 1344844062,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.24129101126864233,
				"gap": 2.118990952250334,
				"elementId": "8WgRXQauyB3JpbH7xCdMO"
			},
			"endBinding": {
				"focus": 0.01088002174986723,
				"gap": 2.166556761002685,
				"elementId": "D-GowF4lgLmayZz3ZWQu1"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-1.2781079627458212,
					35.02737523882092
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1136,
			"versionNonce": 209939458,
			"isDeleted": false,
			"id": "D-GowF4lgLmayZz3ZWQu1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 553.27974365953,
			"y": -1069.1234849552538,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 743559390,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "2VpooVJGJ5oamr9f6pd7c",
					"type": "arrow"
				},
				{
					"id": "cdf0gDx3oR0WOtt3zSeLQ",
					"type": "arrow"
				},
				{
					"id": "fQpbFPjSfPaiN6VOGtY-V",
					"type": "arrow"
				}
			],
			"updated": 1717151704702,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 620,
			"versionNonce": 1899238210,
			"isDeleted": false,
			"id": "fQpbFPjSfPaiN6VOGtY-V",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 454.55767107292826,
			"y": -1107.9104968771376,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 96.82799643858658,
			"height": 42.426475023310786,
			"seed": 1424293214,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151705179,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "E3COVTUB6U1I2ql_PHvqh",
				"focus": 0.30249914927763377,
				"gap": 1.979959220050345
			},
			"endBinding": {
				"elementId": "D-GowF4lgLmayZz3ZWQu1",
				"focus": 0.08501941497503816,
				"gap": 3.2713765049607257
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					96.82799643858658,
					42.426475023310786
				]
			]
		},
		{
			"type": "arrow",
			"version": 684,
			"versionNonce": 2097326238,
			"isDeleted": false,
			"id": "7rKaEoEciLAY1f60Cmba-",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 370.8701048012057,
			"y": -1093.2707343671007,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 180.2623415381879,
			"height": 76.51496895748755,
			"seed": 1201517342,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.8185896271767241,
				"gap": 2.627936870096214,
				"elementId": "3BFCwLPF0n77ASn96HssJ"
			},
			"endBinding": {
				"focus": -0.46313572408093545,
				"gap": 6.031728737767779,
				"elementId": "S3UuYJbVGO_oHXTQQXJmg"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					180.2623415381879,
					76.51496895748755
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1153,
			"versionNonce": 1213216834,
			"isDeleted": false,
			"id": "S3UuYJbVGO_oHXTQQXJmg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 557.0669751048425,
			"y": -1024.4327195743945,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 297722590,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "egsNM1cQmZXS2vLnnfffG",
					"type": "arrow"
				},
				{
					"id": "TNV4_4IhSXN5I1z789VhL",
					"type": "arrow"
				},
				{
					"id": "7rKaEoEciLAY1f60Cmba-",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1021,
			"versionNonce": 1310713054,
			"isDeleted": false,
			"id": "2VpooVJGJ5oamr9f6pd7c",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 566.2603359324672,
			"y": -1048.1824185792013,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.862841278282076,
			"height": 23.835530409658986,
			"seed": 376430814,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.44123812432099846,
				"gap": 2.6998525833012774,
				"elementId": "D-GowF4lgLmayZz3ZWQu1"
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.862841278282076,
					23.835530409658986
				]
			]
		},
		{
			"type": "ellipse",
			"version": 421,
			"versionNonce": 266592258,
			"isDeleted": false,
			"id": "CaVkTGHpnnFHstkhdQlTs",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 710.5695861519674,
			"y": -979.9745700648114,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 743662722,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "U0tTix8nW1WOxBu6mc6G8",
					"type": "arrow"
				},
				{
					"id": "TNV4_4IhSXN5I1z789VhL",
					"type": "arrow"
				},
				{
					"id": "QakXxObGF8USAiqvDE9lN",
					"type": "arrow"
				},
				{
					"id": "VUUSfYE3M-MvAOwSXRJnp",
					"type": "arrow"
				},
				{
					"id": "SbbnYlup6f10zD2u9j32e",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 265,
			"versionNonce": 952867102,
			"isDeleted": false,
			"id": "TNV4_4IhSXN5I1z789VhL",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 581.4371597535235,
			"y": -1009.207619525159,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 126.28330647624693,
			"height": 35.60045434773667,
			"seed": 1669354242,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.15977451889281377,
				"gap": 6.847736645880563,
				"elementId": "S3UuYJbVGO_oHXTQQXJmg"
			},
			"endBinding": {
				"focus": -0.038574687232269145,
				"gap": 3.218411981082106,
				"elementId": "CaVkTGHpnnFHstkhdQlTs"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					126.28330647624693,
					35.60045434773667
				]
			]
		},
		{
			"type": "ellipse",
			"version": 839,
			"versionNonce": 1043107778,
			"isDeleted": false,
			"id": "EO8sNgeWUrsXn_FTcEMAX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 959.6050241699297,
			"y": -552.2136521234428,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1580959774,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "53iNpWPY8NAGanri2vG5c",
					"type": "arrow"
				},
				{
					"id": "2T98bAPdP7Qe8GHJp_iiH",
					"type": "arrow"
				},
				{
					"id": "TNV4_4IhSXN5I1z789VhL",
					"type": "arrow"
				},
				{
					"id": "c5IStCvElDHnc5G24AYsS",
					"type": "arrow"
				},
				{
					"id": "xYuJGTaLBSQnv1McFD121",
					"type": "arrow"
				},
				{
					"id": "85Q61Q16f8IEjNi2UQ524",
					"type": "arrow"
				},
				{
					"id": "pJxB5U8HqEXZhcriN7Cwz",
					"type": "arrow"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 616,
			"versionNonce": 1953940830,
			"isDeleted": false,
			"id": "eKn38A3iwd0ER4jZW7XZy",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1103.9628058227172,
			"y": -715.8486996742878,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 55.99239828999043,
			"height": 35.54894438449423,
			"seed": 1539979614,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "c5IStCvElDHnc5G24AYsS",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "YXWQEZhB"
				}
			],
			"updated": 1717151637230,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 554,
			"versionNonce": 1195984770,
			"isDeleted": false,
			"id": "YXWQEZhB",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1115.9270149164429,
			"y": -708.0742274820407,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 32.06398010253906,
			"height": 20,
			"seed": 926375326,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "tag1",
			"rawText": "tag1",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "eKn38A3iwd0ER4jZW7XZy",
			"originalText": "tag1",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 730,
			"versionNonce": 577923486,
			"isDeleted": false,
			"id": "c5IStCvElDHnc5G24AYsS",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1103.8749899099814,
			"y": -677.7876231152073,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 123.22202863272935,
			"height": 125.70133715104032,
			"seed": 703986142,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637230,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "eKn38A3iwd0ER4jZW7XZy",
				"gap": 2.5136665843187984,
				"focus": 0.18047860460713872
			},
			"endBinding": {
				"elementId": "EO8sNgeWUrsXn_FTcEMAX",
				"gap": 5.639792795546475,
				"focus": 0.2023706399782977
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-123.22202863272935,
					125.70133715104032
				]
			]
		},
		{
			"type": "arrow",
			"version": 1250,
			"versionNonce": 1132005186,
			"isDeleted": false,
			"id": "xYuJGTaLBSQnv1McFD121",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 972.721194257717,
			"y": -529.3789207031531,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.5701609815738493,
			"height": 126.09441602741697,
			"seed": 1847790082,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "EO8sNgeWUrsXn_FTcEMAX",
				"focus": -0.41906688599713376,
				"gap": 4.549856901718327
			},
			"endBinding": {
				"elementId": "ZYCmPlipi5sLgkbAUFpm1",
				"focus": 0.02826619533926831,
				"gap": 9.217453181825247
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.5701609815738493,
					126.09441602741697
				]
			]
		},
		{
			"type": "ellipse",
			"version": 991,
			"versionNonce": 300910046,
			"isDeleted": false,
			"id": "yZI_DtfhVAXIPqZuzvBJB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 704.3756320880764,
			"y": -570.510658737295,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 100055966,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "VUUSfYE3M-MvAOwSXRJnp",
					"type": "arrow"
				},
				{
					"id": "YEcab3CGW62Tyq9nav7A8",
					"type": "arrow"
				},
				{
					"id": "UnGnUpMZqf8QUqN7zYJ7D",
					"type": "arrow"
				},
				{
					"id": "85Q61Q16f8IEjNi2UQ524",
					"type": "arrow"
				},
				{
					"id": "xNDghdFcVxmdoFRyGqdZy",
					"type": "arrow"
				},
				{
					"id": "SbbnYlup6f10zD2u9j32e",
					"type": "arrow"
				},
				{
					"id": "DHrz8gBKwDJbig7BiqB9E",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 795,
			"versionNonce": 1796919042,
			"isDeleted": false,
			"id": "VUUSfYE3M-MvAOwSXRJnp",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 719.0687603648723,
			"y": -955.3814065965506,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 6.688277948481527,
			"height": 380.6211832147359,
			"seed": 1202447646,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "CaVkTGHpnnFHstkhdQlTs",
				"focus": 0.05682985903041961,
				"gap": 5.786741777556671
			},
			"endBinding": {
				"elementId": "yZI_DtfhVAXIPqZuzvBJB",
				"focus": -0.16453062426738121,
				"gap": 4.311330043761773
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-6.688277948481527,
					380.6211832147359
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1247,
			"versionNonce": 67050014,
			"isDeleted": false,
			"id": "ZYCmPlipi5sLgkbAUFpm1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 962.5099125956116,
			"y": -394.0703239861922,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1476914882,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "AxnaVf403JPmSR84fqToW",
					"type": "arrow"
				},
				{
					"id": "2-O_5ZbcNq6FviTHG7pxw",
					"type": "arrow"
				},
				{
					"id": "xYuJGTaLBSQnv1McFD121",
					"type": "arrow"
				},
				{
					"id": "Tn5Lg213YQllimKqkAbHw",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1008,
			"versionNonce": 313368258,
			"isDeleted": false,
			"id": "cCz4X_vexnbFv-SeeucWC",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 706.0527406716616,
			"y": -485.8458956184436,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 2105435038,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "Tn5Lg213YQllimKqkAbHw",
					"type": "arrow"
				},
				{
					"id": "bjE3I10Y9qhv0Tojb_OAM",
					"type": "arrow"
				},
				{
					"id": "wwKLfg2eikXduMWW1DaBP",
					"type": "arrow"
				},
				{
					"id": "YEcab3CGW62Tyq9nav7A8",
					"type": "arrow"
				},
				{
					"id": "xNDghdFcVxmdoFRyGqdZy",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 902,
			"versionNonce": 1871849054,
			"isDeleted": false,
			"id": "YEcab3CGW62Tyq9nav7A8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 712.7862101875564,
			"y": -548.0316493594805,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 2.426919572164934,
			"height": 49.71346306543472,
			"seed": 1508779458,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "yZI_DtfhVAXIPqZuzvBJB",
				"focus": 0.16138842183773852,
				"gap": 3.681849793410315
			},
			"endBinding": {
				"elementId": "cCz4X_vexnbFv-SeeucWC",
				"focus": 0.10044022575489732,
				"gap": 12.47270409482872
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					2.426919572164934,
					49.71346306543472
				]
			]
		},
		{
			"type": "arrow",
			"version": 1393,
			"versionNonce": 651196034,
			"isDeleted": false,
			"id": "Tn5Lg213YQllimKqkAbHw",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 729.3084769771549,
			"y": -476.5509813786955,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 225.28902675447034,
			"height": 81.75636239127789,
			"seed": 156463710,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "cCz4X_vexnbFv-SeeucWC",
				"focus": -0.5194819630632407,
				"gap": 4.6678799516027105
			},
			"endBinding": {
				"elementId": "ZYCmPlipi5sLgkbAUFpm1",
				"focus": 0.38939769857955964,
				"gap": 10.64636452053956
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					225.28902675447034,
					81.75636239127789
				]
			]
		},
		{
			"type": "rectangle",
			"version": 925,
			"versionNonce": 1165601438,
			"isDeleted": false,
			"id": "jyOM9KXBptKiB1Xf_SLbP",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1099.8639040452151,
			"y": -437.56754197886033,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 55.99239828999043,
			"height": 35.54894438449423,
			"seed": 821411650,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "2-O_5ZbcNq6FviTHG7pxw",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "98HwoQw7"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 865,
			"versionNonce": 675436098,
			"isDeleted": false,
			"id": "98HwoQw7",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1108.548114359644,
			"y": -429.7930697866132,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 38.62397766113281,
			"height": 20,
			"seed": 2017494786,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "tag3",
			"rawText": "tag3",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "jyOM9KXBptKiB1Xf_SLbP",
			"originalText": "tag3",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 1649,
			"versionNonce": 879142622,
			"isDeleted": false,
			"id": "2-O_5ZbcNq6FviTHG7pxw",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1098.8639040452151,
			"y": -419.16703433238376,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 107.2756280063843,
			"height": 37.956537230023514,
			"seed": 2126590082,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "jyOM9KXBptKiB1Xf_SLbP",
				"gap": 1,
				"focus": 0.34854917658697254
			},
			"endBinding": {
				"elementId": "ZYCmPlipi5sLgkbAUFpm1",
				"gap": 10.784395519985758,
				"focus": 1.0475861422580321
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-107.2756280063843,
					37.956537230023514
				]
			]
		},
		{
			"type": "arrow",
			"version": 377,
			"versionNonce": 669138434,
			"isDeleted": false,
			"id": "y2XcU-aFumBGtdStw5_PF",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 364.6352993094545,
			"y": -1390.6142284930002,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.0498301779369967,
			"height": 115.98426625002435,
			"seed": 150669470,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "K8xkmHkN",
				"focus": -0.22522673846351718,
				"gap": 5.898207262107007
			},
			"endBinding": {
				"elementId": "HdhEoVIkFTejcTp910TlW",
				"focus": -0.3300770842220533,
				"gap": 14.145505633301907
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-1.0498301779369967,
					115.98426625002435
				]
			]
		},
		{
			"type": "arrow",
			"version": 376,
			"versionNonce": 1827281694,
			"isDeleted": false,
			"id": "-tDxLSbWPqcw9utBEfMzq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 441.8980935729927,
			"y": -1383.2225799927792,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.486093622689964,
			"height": 61.494034067447046,
			"seed": 1640931458,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "jUzrAMkF",
				"focus": -0.3948501671929727,
				"gap": 6.309909226669333
			},
			"endBinding": {
				"elementId": "JwSNB46JUKNqtddxZKWGs",
				"focus": -0.1346158910859521,
				"gap": 10.6448342370469
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-1.486093622689964,
					61.494034067447046
				]
			]
		},
		{
			"type": "arrow",
			"version": 415,
			"versionNonce": 1118776770,
			"isDeleted": false,
			"id": "nsY1715VMrSqP4zi_haBT",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 560.4134568880789,
			"y": -1426.2156372769566,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.5560031747060066,
			"height": 232.10934803653322,
			"seed": 877982622,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.4331775694274499,
				"gap": 9.159437720282313,
				"elementId": "MQ9BISi1"
			},
			"endBinding": {
				"focus": 0.028841052594188354,
				"gap": 1.3810260083989885,
				"elementId": "ONTR_DTuQc3IVGVGekozq"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.5560031747060066,
					232.10934803653322
				]
			]
		},
		{
			"type": "arrow",
			"version": 90,
			"versionNonce": 1702168414,
			"isDeleted": false,
			"id": "N46_2vTLzCOEaCjxvJfVg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 723.0070798975737,
			"y": -1434.86096027721,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 2.7844434797656277,
			"height": 68.55679974533928,
			"seed": 782249730,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.00754574107762135,
				"gap": 5.5168155318131085,
				"elementId": "unMsjTQu"
			},
			"endBinding": {
				"focus": -0.3225922598963428,
				"gap": 8.291019298481947,
				"elementId": "4bFpT96_2v7bvUy9MnG0G"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-2.7844434797656277,
					68.55679974533928
				]
			]
		},
		{
			"type": "arrow",
			"version": 353,
			"versionNonce": 499656066,
			"isDeleted": false,
			"id": "xN92JemNHK0W0SsV8Pe0H",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 970.3909052979463,
			"y": -1436.3727026952265,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 4.104697471393251,
			"height": 344.9011226985069,
			"seed": 1021088606,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.04806032299822101,
				"gap": 1,
				"elementId": "bLBl2z8M"
			},
			"endBinding": {
				"focus": 0.3707429302849387,
				"gap": 4.528426748498868,
				"elementId": "PiuN5VXCsZK4KZSsU_YJg"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-4.104697471393251,
					344.9011226985069
				]
			]
		},
		{
			"type": "arrow",
			"version": 586,
			"versionNonce": 509111198,
			"isDeleted": false,
			"id": "85Q61Q16f8IEjNi2UQ524",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 729.4723154155051,
			"y": -560.0174045765337,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 229.9737439514049,
			"height": 9.750929283072423,
			"seed": 1427511710,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "yZI_DtfhVAXIPqZuzvBJB",
				"focus": 0.04543560375686005,
				"gap": 6.544607075224624
			},
			"endBinding": {
				"elementId": "EO8sNgeWUrsXn_FTcEMAX",
				"focus": 0.7499224429264159,
				"gap": 2.70653916805386
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					229.9737439514049,
					9.750929283072423
				]
			]
		},
		{
			"type": "text",
			"version": 632,
			"versionNonce": 1651254594,
			"isDeleted": false,
			"id": "5fd5P8Qb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 815.3630302893374,
			"y": -1334.5881810443436,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 57.59992980957031,
			"height": 25,
			"seed": 1385355138,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "yLw0G5h3k0hxMzVeBj-Jz",
					"type": "arrow"
				},
				{
					"id": "lnH2Bxx9aJy-oWEmQezDJ",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "hotfix",
			"rawText": "hotfix",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "hotfix",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 528,
			"versionNonce": 1707427806,
			"isDeleted": false,
			"id": "Jw2CQm2JXU6lzCeHGxxbI",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 958.206096315571,
			"y": -1390.1599093827867,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 98.05514923009423,
			"height": 142.66813504097945,
			"seed": 746480478,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.06950708609359153,
				"gap": 2.6231798800256954,
				"elementId": "CAc3v7rYwYLYrdgxyriIw"
			},
			"endBinding": {
				"focus": -0.034091057565627435,
				"gap": 7.199458479599304,
				"elementId": "BHY8a9DRFIAVjjc7MlNtx"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-98.05514923009423,
					142.66813504097945
				]
			]
		},
		{
			"type": "ellipse",
			"version": 459,
			"versionNonce": 972696834,
			"isDeleted": false,
			"id": "HjQTudAWcbvX56s-DmMh0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 835.651245333957,
			"y": -1260.4335585504587,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 341111682,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "yLw0G5h3k0hxMzVeBj-Jz",
					"type": "arrow"
				},
				{
					"id": "zwTRXh94NuLCpnD-z2J9Y",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 320,
			"versionNonce": 466394142,
			"isDeleted": false,
			"id": "PiuN5VXCsZK4KZSsU_YJg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 953.3858491909932,
			"y": -1087.4259929663801,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1458251650,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "VR-FI2fn4Pi51WwjJNg8r",
					"type": "arrow"
				},
				{
					"id": "pJxB5U8HqEXZhcriN7Cwz",
					"type": "arrow"
				},
				{
					"id": "_6XvIeZt8zS43pfo8y5b5",
					"type": "arrow"
				},
				{
					"id": "v9ZYK2uUQxS9MuqDdInPg",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 116,
			"versionNonce": 1240546498,
			"isDeleted": false,
			"id": "VR-FI2fn4Pi51WwjJNg8r",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 969.1147717840208,
			"y": -1385.7804034800158,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 4.575501420209093,
			"height": 289.09001573954424,
			"seed": 128359618,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "CAc3v7rYwYLYrdgxyriIw",
				"focus": -0.3708632254795425,
				"gap": 4.558583000242313
			},
			"endBinding": {
				"elementId": "PiuN5VXCsZK4KZSsU_YJg",
				"focus": 0.16821491783238504,
				"gap": 9.35788307128914
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-4.575501420209093,
					289.09001573954424
				]
			]
		},
		{
			"type": "arrow",
			"version": 359,
			"versionNonce": 1985964126,
			"isDeleted": false,
			"id": "pJxB5U8HqEXZhcriN7Cwz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 965.5514674880234,
			"y": -1063.7233220296662,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 6.275315555546058,
			"height": 504.48209713244364,
			"seed": 1495688862,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "PiuN5VXCsZK4KZSsU_YJg",
				"focus": -0.2900669733406553,
				"gap": 5.165474005655884
			},
			"endBinding": {
				"elementId": "EO8sNgeWUrsXn_FTcEMAX",
				"focus": 0.3369689938475433,
				"gap": 7.289898792129987
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					6.275315555546058,
					504.48209713244364
				]
			]
		},
		{
			"type": "arrow",
			"version": 132,
			"versionNonce": 804279426,
			"isDeleted": false,
			"id": "_6XvIeZt8zS43pfo8y5b5",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 856.9244805772125,
			"y": -1178.3264335220852,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 93.26814643522368,
			"height": 89.13803027582162,
			"seed": 1128386242,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "BHY8a9DRFIAVjjc7MlNtx",
				"focus": -0.4753507023817794,
				"gap": 8.957728218820996
			},
			"endBinding": {
				"elementId": "PiuN5VXCsZK4KZSsU_YJg",
				"focus": -0.05858334981817867,
				"gap": 7.411212764522638
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					93.26814643522368,
					89.13803027582162
				]
			]
		},
		{
			"type": "arrow",
			"version": 594,
			"versionNonce": 1162783902,
			"isDeleted": false,
			"id": "P5eJr2mDzymkrWBNS87yi",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1071.2927731227096,
			"y": -1343.340112309239,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 87.84404046095665,
			"height": 43.60378202283687,
			"seed": 789519838,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "xj0K3RVw89xD2DMv1Q0FO",
				"gap": 5.903268431446918,
				"focus": -0.5862545951518257
			},
			"endBinding": {
				"elementId": "CAc3v7rYwYLYrdgxyriIw",
				"gap": 12.181481417542454,
				"focus": 0.3532932197515185
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-87.84404046095665,
					-43.60378202283687
				]
			]
		},
		{
			"type": "rectangle",
			"version": 489,
			"versionNonce": 2109109314,
			"isDeleted": false,
			"id": "xj0K3RVw89xD2DMv1Q0FO",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1077.1960415541566,
			"y": -1363.428399533761,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 71.85534932014731,
			"height": 38.32626114209984,
			"seed": 199433246,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "DfiEJ1LM"
				},
				{
					"id": "GPghsHKL_8iszHP-TJ-il",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 430,
			"versionNonce": 910911710,
			"isDeleted": false,
			"id": "DfiEJ1LM",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1087.483732083371,
			"y": -1354.2652689627112,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 51.27996826171875,
			"height": 20,
			"seed": 530966622,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "Tag0.1",
			"rawText": "Tag0.1",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "xj0K3RVw89xD2DMv1Q0FO",
			"originalText": "Tag0.1",
			"lineHeight": 1.25
		},
		{
			"type": "rectangle",
			"version": 756,
			"versionNonce": 891460610,
			"isDeleted": false,
			"id": "kfUmtNAfE_6FOE4ckRiwE",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1095.4159029537234,
			"y": -1143.2488267623671,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 81.62035007530358,
			"height": 41.32160242006783,
			"seed": 1589458306,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "v9ZYK2uUQxS9MuqDdInPg",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "h7VvxEAA"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 701,
			"versionNonce": 417766686,
			"isDeleted": false,
			"id": "h7VvxEAA",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1108.9700965460627,
			"y": -1132.5880255523332,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 54.511962890625,
			"height": 20,
			"seed": 1648309570,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "tag0.2",
			"rawText": "tag0.2",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "kfUmtNAfE_6FOE4ckRiwE",
			"originalText": "tag0.2",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 745,
			"versionNonce": 1144245186,
			"isDeleted": false,
			"id": "v9ZYK2uUQxS9MuqDdInPg",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1092.9022363694046,
			"y": -1115.3752198616448,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 110.93083683279065,
			"height": 33.754599699064784,
			"seed": 1827355906,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "kfUmtNAfE_6FOE4ckRiwE",
				"gap": 2.5136665843187984,
				"focus": 0.18047860460713872
			},
			"endBinding": {
				"elementId": "PiuN5VXCsZK4KZSsU_YJg",
				"gap": 10.3277595757565,
				"focus": 0.2300923965995475
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-110.93083683279065,
					33.754599699064784
				]
			]
		},
		{
			"type": "ellipse",
			"version": 591,
			"versionNonce": 579946846,
			"isDeleted": false,
			"id": "jQ3S9pa7thGGfiBuQp26q",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 713.4224646526798,
			"y": -1146.9565088349168,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 672438366,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "xN92JemNHK0W0SsV8Pe0H",
					"type": "arrow"
				},
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "kKMKqCPwcE0bUXHFxiB9P",
					"type": "arrow"
				},
				{
					"id": "Jw2CQm2JXU6lzCeHGxxbI",
					"type": "arrow"
				},
				{
					"id": "_6XvIeZt8zS43pfo8y5b5",
					"type": "arrow"
				},
				{
					"id": "uxKC_0IAp83Qp6MdaqHj1",
					"type": "arrow"
				},
				{
					"id": "lRqgC3i8zi_5ANXyPCwtl",
					"type": "arrow"
				},
				{
					"id": "U0tTix8nW1WOxBu6mc6G8",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 167,
			"versionNonce": 17367938,
			"isDeleted": false,
			"id": "uxKC_0IAp83Qp6MdaqHj1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 721.6994704024314,
			"y": -1334.4247952524834,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 3.274599397383554,
			"height": 177.09450100647064,
			"seed": 811893954,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "4bFpT96_2v7bvUy9MnG0G",
				"focus": 0.06076415798354594,
				"gap": 4.934582914043329
			},
			"endBinding": {
				"elementId": "jQ3S9pa7thGGfiBuQp26q",
				"focus": -0.5010491657053477,
				"gap": 10.839282181877888
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-3.274599397383554,
					177.09450100647064
				]
			]
		},
		{
			"type": "arrow",
			"version": 244,
			"versionNonce": 849112478,
			"isDeleted": false,
			"id": "lRqgC3i8zi_5ANXyPCwtl",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 825.8991845932348,
			"y": -1182.0198063012213,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 89.12835778614124,
			"height": 38.03296088691536,
			"seed": 106181854,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "BHY8a9DRFIAVjjc7MlNtx",
				"focus": 0.10919724914036122,
				"gap": 6.741396314376821
			},
			"endBinding": {
				"elementId": "jQ3S9pa7thGGfiBuQp26q",
				"focus": -0.043748486866530545,
				"gap": 6.146337594195266
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-89.12835778614124,
					38.03296088691536
				]
			]
		},
		{
			"type": "arrow",
			"version": 125,
			"versionNonce": 635519810,
			"isDeleted": false,
			"id": "U0tTix8nW1WOxBu6mc6G8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 719.458552731787,
			"y": -1123.799844711853,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.6332640281461863,
			"height": 136.2488754417309,
			"seed": 528890882,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "jQ3S9pa7thGGfiBuQp26q",
				"focus": 0.35770260626392764,
				"gap": 4.716475243277898
			},
			"endBinding": {
				"elementId": "CaVkTGHpnnFHstkhdQlTs",
				"focus": 0.033033380184632144,
				"gap": 7.577951456579598
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.6332640281461863,
					136.2488754417309
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1283,
			"versionNonce": 1049816834,
			"isDeleted": false,
			"id": "2lkEj6JJozgS3zB8JRUYf",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1185.9570041118172,
			"y": -1300.1926584089501,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 234.55054554300054,
			"height": 130,
			"seed": 1069398558,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "VlGYHEX0"
				},
				{
					"id": "lnH2Bxx9aJy-oWEmQezDJ",
					"type": "arrow"
				}
			],
			"updated": 1717152549833,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1401,
			"versionNonce": 35765954,
			"isDeleted": false,
			"id": "VlGYHEX0",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1192.3729018833176,
			"y": -1295.1926584089501,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 221.71875,
			"height": 120,
			"seed": 2054997598,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717152549833,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "直接在hotfix测试，测试\n通过后合并到发布分支，\n并同步代码到develop分支\n，hotfix为临时分支，使\n用过后务必删除",
			"rawText": "直接在hotfix测试，测试通过后合并到发布分支，并同步代码到develop分支，hotfix为临时分支，使用过后务必删除",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "2lkEj6JJozgS3zB8JRUYf",
			"originalText": "直接在hotfix测试，测试通过后合并到发布分支，并同步代码到develop分支，hotfix为临时分支，使用过后务必删除",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 1892,
			"versionNonce": 556693058,
			"isDeleted": false,
			"id": "lnH2Bxx9aJy-oWEmQezDJ",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1180.8923376014855,
			"y": -1225.3843409026736,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 298.6090514378899,
			"height": 88.96076540863783,
			"seed": 1914919262,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717152549834,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "2lkEj6JJozgS3zB8JRUYf",
				"gap": 5.064666510331676,
				"focus": -0.46279060906932923
			},
			"endBinding": {
				"elementId": "5fd5P8Qb",
				"gap": 9.32032606468772,
				"focus": -0.1714238134296102
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-298.6090514378899,
					-88.96076540863783
				]
			]
		},
		{
			"type": "arrow",
			"version": 598,
			"versionNonce": 1832311490,
			"isDeleted": false,
			"id": "egsNM1cQmZXS2vLnnfffG",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 566.3242203756865,
			"y": -1001.8863409287814,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.3946507298053348,
			"height": 37.23125014074151,
			"seed": 1211410910,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.019296452285454433,
				"gap": 3.7188751812685705,
				"elementId": "S3UuYJbVGO_oHXTQQXJmg"
			},
			"endBinding": {
				"focus": 0.050403615779419784,
				"gap": 1.8203227066759204,
				"elementId": "spaobhXdgSlQtQjWcbVzW"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.3946507298053348,
					37.23125014074151
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1376,
			"versionNonce": 1246407262,
			"isDeleted": false,
			"id": "spaobhXdgSlQtQjWcbVzW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 557.0752295355649,
			"y": -963.9352908381836,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 536149698,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 474,
			"versionNonce": 1423061634,
			"isDeleted": false,
			"id": "JGGBpnvIHxMNL_53clQGe",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 218.60999518348603,
			"y": -1084.0905265165409,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 335.5910962324954,
			"height": 122.67496423987541,
			"seed": 493962306,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.19539012731840996,
				"gap": 2.761584936770536,
				"elementId": "YXn4oUflANBrznhLtC4zy"
			},
			"endBinding": {
				"focus": 0.35380376400317215,
				"gap": 5.226627504209748,
				"elementId": "spaobhXdgSlQtQjWcbVzW"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					335.5910962324954,
					122.67496423987541
				]
			]
		},
		{
			"type": "text",
			"version": 745,
			"versionNonce": 1048686238,
			"isDeleted": false,
			"id": "A0cdj6By",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 280.47398614123466,
			"y": -1127.809509184279,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.015975952148438,
			"height": 20,
			"seed": 1162641858,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "f4",
			"rawText": "f4",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f4",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 314,
			"versionNonce": 648843842,
			"isDeleted": false,
			"id": "mo7tVS1H7Tk0lzVv-uUVf",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 350.8376113671413,
			"y": -1152.7656034928368,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 66.84151275792163,
			"height": 130.4824385704943,
			"seed": 1586504734,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 1.1460722228271305,
				"gap": 7.990617504769027,
				"elementId": "prd_oPStLQZ19wqs7sgK_"
			},
			"endBinding": {
				"focus": -0.7893548106897021,
				"gap": 9.839626147435753,
				"elementId": "CU_i0j52KV5Sw-kO7v9mq"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-66.84151275792163,
					130.4824385704943
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1091,
			"versionNonce": 1439574750,
			"isDeleted": false,
			"id": "1ocksHAuPeLoi4TRJYlEj",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 273.1372609409153,
			"y": -1013.8691879605057,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1974758210,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 330,
			"versionNonce": 1436875266,
			"isDeleted": false,
			"id": "S-u3CW9VzZbucjU7w8ojs",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 282.1563468534929,
			"y": -990.4734575314362,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0.1020022652373882,
			"height": 35.120482026612535,
			"seed": 382361630,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.02520273289358488,
				"gap": 4.570926862434609,
				"elementId": "CU_i0j52KV5Sw-kO7v9mq"
			},
			"endBinding": {
				"focus": -0.09228224350508485,
				"gap": 4.426745497792922,
				"elementId": "_dMu1uWRhq2_ueVMAa9Ur"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.1020022652373882,
					35.120482026612535
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1315,
			"versionNonce": 2126585630,
			"isDeleted": false,
			"id": "qCwa2FxFtZkhn-uk7vqly",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 273.57773256979794,
			"y": -950.9508215821314,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1529724482,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "5BMA3xeS4QN3eWdeYI2Zi",
					"type": "arrow"
				},
				{
					"id": "HuSQh1fda3xyMkgGQ1IZo",
					"type": "arrow"
				},
				{
					"id": "vArEYUXMzeramwZbWlnMf",
					"type": "arrow"
				},
				{
					"id": "MkiVn8NVjOyXjrXFlAuKZ",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1575,
			"versionNonce": 549087682,
			"isDeleted": false,
			"id": "j3ixQlZiLJha4TcLPXkxw",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 275.6666457380925,
			"y": -831.4740790224563,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1186814146,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "k8OtUFQJL-fZtNBQxG2sB",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 781,
			"versionNonce": 768314206,
			"isDeleted": false,
			"id": "5BMA3xeS4QN3eWdeYI2Zi",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 281.4946737509498,
			"y": -926.7567434950231,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 3.1011007836011686,
			"height": 83.42570866476103,
			"seed": 1466936542,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637231,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.18576862684381437,
				"gap": 5.431590786989769,
				"elementId": "qCwa2FxFtZkhn-uk7vqly"
			},
			"endBinding": {
				"focus": -0.10655416641739462,
				"gap": 11.932286843281831,
				"elementId": "j3ixQlZiLJha4TcLPXkxw"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					3.1011007836011686,
					83.42570866476103
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1562,
			"versionNonce": 252436866,
			"isDeleted": false,
			"id": "VN_dAZrUgt78f6zUFRXcq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 551.1805167550128,
			"y": -749.6120627203783,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 284934366,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "M-i69j4rNYTlUJlwIe726",
					"type": "arrow"
				}
			],
			"updated": 1717151637231,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1113,
			"versionNonce": 557739934,
			"isDeleted": false,
			"id": "vArEYUXMzeramwZbWlnMf",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 297.5729909822761,
			"y": -937.6797684057055,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 241.99374226156783,
			"height": 194.26671012311976,
			"seed": 229346206,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.6538725376013296,
				"gap": 5.896900258098743,
				"elementId": "qCwa2FxFtZkhn-uk7vqly"
			},
			"endBinding": {
				"focus": -0.9531741634303382,
				"gap": 12.16797628308463,
				"elementId": "MHPqF6KnsnTuIjmPE90By"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					241.99374226156783,
					194.26671012311976
				]
			]
		},
		{
			"type": "arrow",
			"version": 759,
			"versionNonce": 1809342786,
			"isDeleted": false,
			"id": "mF2NsK5OAO_CmSmv6kkvB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 563.0595830114892,
			"y": -938.8310089974666,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.5814041315197755,
			"height": 73.70188654322533,
			"seed": 1300171614,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.3693624990814514,
				"gap": 6.627170719649207,
				"elementId": "spaobhXdgSlQtQjWcbVzW"
			},
			"endBinding": {
				"focus": 0.20743147810348647,
				"gap": 3.8342282441486333,
				"elementId": "O-ztf6nmuoD01WAnKrVjv"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.5814041315197755,
					73.70188654322533
				]
			]
		},
		{
			"type": "ellipse",
			"version": 916,
			"versionNonce": 625658846,
			"isDeleted": false,
			"id": "ONTR_DTuQc3IVGVGekozq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 551.43308015478,
			"y": -1192.7280419694885,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1093104990,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "nsY1715VMrSqP4zi_haBT",
					"type": "arrow"
				},
				{
					"id": "eovn8B_fdd3YHCdCxH-5W",
					"type": "arrow"
				},
				{
					"id": "l3PhCwCd23xB8fu5A4r38",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 334,
			"versionNonce": 1115613442,
			"isDeleted": false,
			"id": "l3PhCwCd23xB8fu5A4r38",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 562.401988901171,
			"y": -1173.0392213143828,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 1.2745925487794239,
			"height": 37.651854837382416,
			"seed": 249077762,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ONTR_DTuQc3IVGVGekozq",
				"focus": -0.14176643829561822,
				"gap": 1
			},
			"endBinding": {
				"elementId": "8WgRXQauyB3JpbH7xCdMO",
				"focus": 0.1866503423788278,
				"gap": 8.322532519739925
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.2745925487794239,
					37.651854837382416
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1421,
			"versionNonce": 1476501534,
			"isDeleted": false,
			"id": "hcS-Qj3dbfjSNH-Ck10V7",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 806.9919499213022,
			"y": -1009.7774020947063,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 134.8608232097468,
			"height": 106,
			"seed": 1340586718,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "f2rtc5rP_7_pLzZ7D0P_a",
					"type": "arrow"
				},
				{
					"id": "SFCvxDfHeNCyJLXg6WGor",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "KdHq0UN6"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1370,
			"versionNonce": 1518237890,
			"isDeleted": false,
			"id": "KdHq0UN6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 814.4223615261756,
			"y": -992.7774020947063,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 120,
			"height": 72,
			"seed": 522759966,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "同一批提测内\n容同时合并到\ntest并部署",
			"rawText": "同一批提测内容同时合并到test并部署",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "hcS-Qj3dbfjSNH-Ck10V7",
			"originalText": "同一批提测内容同时合并到test并部署",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 2269,
			"versionNonce": 1834216542,
			"isDeleted": false,
			"id": "f2rtc5rP_7_pLzZ7D0P_a",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 803.1713947451824,
			"y": -1010.6690350322579,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 218.1939117806171,
			"height": 133.3823094940958,
			"seed": 1478674334,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "hcS-Qj3dbfjSNH-Ck10V7",
				"gap": 3.9232194877552047,
				"focus": 0.10963643305985749
			},
			"endBinding": {
				"elementId": "Cu0LOV14I3RoeuYuOkv1s",
				"gap": 2.359655802007353,
				"focus": -0.06431052942264591
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-218.1939117806171,
					-133.3823094940958
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1360,
			"versionNonce": 863375490,
			"isDeleted": false,
			"id": "npxSqkWlpfhF23jV7-u8f",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1376.7604272834228,
			"y": -153.17727537481198,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 795901918,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "VUUSfYE3M-MvAOwSXRJnp",
					"type": "arrow"
				},
				{
					"id": "xYuJGTaLBSQnv1McFD121",
					"type": "arrow"
				},
				{
					"id": "Tn5Lg213YQllimKqkAbHw",
					"type": "arrow"
				},
				{
					"id": "2-O_5ZbcNq6FviTHG7pxw",
					"type": "arrow"
				},
				{
					"id": "BUnYET1yOraQVnBy8zBLN",
					"type": "arrow"
				},
				{
					"id": "5lTyLBSg5_MTHHlETSTuN",
					"type": "arrow"
				},
				{
					"id": "IEfK0rRvKF3O7lJwWHsft",
					"type": "arrow"
				},
				{
					"id": "_UPE9EuW953c_EAOaG0eR",
					"type": "arrow"
				},
				{
					"id": "bHp-kjsX6wlwcnzEMhyF3",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 679,
			"versionNonce": 1930604702,
			"isDeleted": false,
			"id": "jFDLcqqS",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1338.61981207668,
			"y": -252.4485181847264,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 101.57989501953125,
			"height": 25,
			"seed": 377222862,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "xN92JemNHK0W0SsV8Pe0H",
					"type": "arrow"
				},
				{
					"id": "bHp-kjsX6wlwcnzEMhyF3",
					"type": "arrow"
				},
				{
					"id": "NZfJO84Q-yWa9TAKWFyb4",
					"type": "arrow"
				},
				{
					"id": "9zzyEzD55s81IC4vq6U-v",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "release-xx",
			"rawText": "release-xx",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "release-xx",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 1219,
			"versionNonce": 19181634,
			"isDeleted": false,
			"id": "zQaS1up97tTmtKxqk4xaE",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 824.6305830673041,
			"y": -386.70921336488664,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1373258846,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "bjE3I10Y9qhv0Tojb_OAM",
					"type": "arrow"
				},
				{
					"id": "nvQWrfEG4ib3CdgroMwdn",
					"type": "arrow"
				},
				{
					"id": "3LWmsUhf8uKnL5lJScBMp",
					"type": "arrow"
				},
				{
					"id": "NZfJO84Q-yWa9TAKWFyb4",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 628,
			"versionNonce": 351202526,
			"isDeleted": false,
			"id": "bjE3I10Y9qhv0Tojb_OAM",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 718.2112632067469,
			"y": -465.7265702234522,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 102.93108507899865,
			"height": 78.87803626599987,
			"seed": 1862565854,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "cCz4X_vexnbFv-SeeucWC",
				"focus": 0.7209571537758709,
				"gap": 1.6764389977217125
			},
			"endBinding": {
				"elementId": "zQaS1up97tTmtKxqk4xaE",
				"focus": -0.020526472626091405,
				"gap": 6.621007813745315
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					102.93108507899865,
					78.87803626599987
				]
			]
		},
		{
			"type": "text",
			"version": 532,
			"versionNonce": 661215234,
			"isDeleted": false,
			"id": "unMsjTQu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 802.1047789205808,
			"y": -516.1353520250284,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 84.159912109375,
			"height": 25,
			"seed": 1303926466,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "nvQWrfEG4ib3CdgroMwdn",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "develop2",
			"rawText": "develop2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "develop2",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 193,
			"versionNonce": 1618583838,
			"isDeleted": false,
			"id": "nvQWrfEG4ib3CdgroMwdn",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 833.7327925305144,
			"y": -484.61883585389023,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 0.5138838852838035,
			"height": 93.25044453483315,
			"seed": 913497630,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "unMsjTQu",
				"focus": 0.25046331725179244,
				"gap": 6.516516171138164
			},
			"endBinding": {
				"elementId": "zQaS1up97tTmtKxqk4xaE",
				"focus": 0.04297996392421106,
				"gap": 4.662922584000027
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.5138838852838035,
					93.25044453483315
				]
			]
		},
		{
			"type": "arrow",
			"version": 379,
			"versionNonce": 910362562,
			"isDeleted": false,
			"id": "3LWmsUhf8uKnL5lJScBMp",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 834.5534748928874,
			"y": -362.61353671207564,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 2.6139072479948027,
			"height": 92.26573070894875,
			"seed": 1246269470,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "zQaS1up97tTmtKxqk4xaE",
				"focus": -0.11235275183100883,
				"gap": 5.281796793290839
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-2.6139072479948027,
					92.26573070894875
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1333,
			"versionNonce": 153341278,
			"isDeleted": false,
			"id": "aw4CAAArfru6wbCLq3Zi9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 825.854981595188,
			"y": -271.0436106814569,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1117005982,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 233,
			"versionNonce": 1708179330,
			"isDeleted": false,
			"id": "BUnYET1yOraQVnBy8zBLN",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 846.6791396118585,
			"y": -259.8649147161485,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 518.957094613882,
			"height": 111.66679707639383,
			"seed": 247283330,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.07452408456960716,
				"gap": 2.3674043013215336,
				"elementId": "aw4CAAArfru6wbCLq3Zi9"
			},
			"endBinding": {
				"focus": 0.004269559380753703,
				"gap": 11.594873195721126,
				"elementId": "npxSqkWlpfhF23jV7-u8f"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					518.957094613882,
					111.66679707639383
				]
			]
		},
		{
			"type": "rectangle",
			"version": 973,
			"versionNonce": 742289822,
			"isDeleted": false,
			"id": "t-8-3WCvK70TxpeoRHbeb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1474.355675723943,
			"y": -211.9530529684614,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 81.62035007530358,
			"height": 41.32160242006783,
			"seed": 1104428318,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "5lTyLBSg5_MTHHlETSTuN",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "zX1Z9KRj"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 923,
			"versionNonce": 307330882,
			"isDeleted": false,
			"id": "zX1Z9KRj",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1490.141871574583,
			"y": -201.29225175842748,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 50.04795837402344,
			"height": 20,
			"seed": 483060062,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "tagxx1",
			"rawText": "tagxx1",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "t-8-3WCvK70TxpeoRHbeb",
			"originalText": "tagxx1",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 1257,
			"versionNonce": 351964638,
			"isDeleted": false,
			"id": "5lTyLBSg5_MTHHlETSTuN",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1471.8420091396242,
			"y": -181.03486160159036,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 66.0576114977107,
			"height": 25.8462316469637,
			"seed": 1956777374,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "t-8-3WCvK70TxpeoRHbeb",
				"gap": 2.5136665843187984,
				"focus": 0.18024815627190519
			},
			"endBinding": {
				"elementId": "npxSqkWlpfhF23jV7-u8f",
				"gap": 13.475052675933584,
				"focus": -0.3671805788203974
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-66.0576114977107,
					25.8462316469637
				]
			]
		},
		{
			"type": "arrow",
			"version": 949,
			"versionNonce": 941901570,
			"isDeleted": false,
			"id": "AxnaVf403JPmSR84fqToW",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 968.8760090706289,
			"y": -371.04503193628517,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 3.5277425273882272,
			"height": 172.72279767070572,
			"seed": 277153922,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.28496021961416096,
				"gap": 4.514471051319234,
				"elementId": "ZYCmPlipi5sLgkbAUFpm1"
			},
			"endBinding": {
				"focus": -0.3724415462982341,
				"gap": 11.919902502078193,
				"elementId": "mQUBWYayOAvjr4J4BevGY"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-3.5277425273882272,
					172.72279767070572
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1507,
			"versionNonce": 6890014,
			"isDeleted": false,
			"id": "mQUBWYayOAvjr4J4BevGY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 959.0851127581125,
			"y": -186.62120844833612,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 475142046,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "JbEM3rRHJCBkirdGQDdtX",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 996,
			"versionNonce": 1875384002,
			"isDeleted": false,
			"id": "d6G8qaH01KZ3LYTyi_2YS",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 987.2122643912661,
			"y": -78.75483648573314,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 93.80797859487313,
			"height": 24.4212849379458,
			"seed": 777283358,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.14125751084304894,
				"gap": 6.8979394511210455,
				"elementId": "9ZnAC9T-R_wsrYmRumPE7"
			},
			"endBinding": {
				"focus": 0.5281203701257839,
				"gap": 9.477862213392836,
				"elementId": "9gauCUet2RsCAhndCs10e"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					93.80797859487313,
					24.4212849379458
				]
			]
		},
		{
			"type": "ellipse",
			"version": 920,
			"versionNonce": 1635462750,
			"isDeleted": false,
			"id": "9gauCUet2RsCAhndCs10e",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1088.023076203782,
			"y": -54.37148597303087,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 2045194590,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "dwQsPydpdPsFOh4-XtXqM",
					"type": "arrow"
				},
				{
					"id": "264FCYvWUOfOKBLoIKtgv",
					"type": "arrow"
				},
				{
					"id": "ziPo5ft_u9UjjHGinvdWL",
					"type": "arrow"
				},
				{
					"id": "d6G8qaH01KZ3LYTyi_2YS",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 647,
			"versionNonce": 1776021122,
			"isDeleted": false,
			"id": "IEfK0rRvKF3O7lJwWHsft",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1391.4212105016231,
			"y": -129.66201180560194,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 0.4516006399053367,
			"height": 460.09579077984324,
			"seed": 489621186,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "npxSqkWlpfhF23jV7-u8f",
				"focus": -0.5789049270585193,
				"gap": 5.6896313586856735
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.4516006399053367,
					460.09579077984324
				]
			]
		},
		{
			"type": "text",
			"version": 910,
			"versionNonce": 1797180994,
			"isDeleted": false,
			"id": "6o4SCA8R",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1074.9138357833551,
			"y": -120.66690032501803,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 63.019927978515625,
			"height": 25,
			"seed": 66192770,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "264FCYvWUOfOKBLoIKtgv",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "hotfix1",
			"rawText": "hotfix1",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "hotfix1",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 1730,
			"versionNonce": 1974316766,
			"isDeleted": false,
			"id": "9ZnAC9T-R_wsrYmRumPE7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 961.9640447965438,
			"y": -90.95548181868514,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 551995330,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "f1esZIIxFsYqYbm4rnZfd",
					"type": "arrow"
				},
				{
					"id": "d6G8qaH01KZ3LYTyi_2YS",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 347,
			"versionNonce": 1215280642,
			"isDeleted": false,
			"id": "JbEM3rRHJCBkirdGQDdtX",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 968.1241172270209,
			"y": -164.2177655924014,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 0.3832013764606472,
			"height": 70.72422928664126,
			"seed": 1484873758,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.03939811713605721,
				"gap": 3.5784393793020186,
				"elementId": "mQUBWYayOAvjr4J4BevGY"
			},
			"endBinding": {
				"focus": -0.2606261778655718,
				"gap": 5.661008154587133,
				"elementId": "9ZnAC9T-R_wsrYmRumPE7"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.3832013764606472,
					70.72422928664126
				]
			]
		},
		{
			"type": "ellipse",
			"version": 2147,
			"versionNonce": 1057566,
			"isDeleted": false,
			"id": "vTI0zcR0tV5FOHIYEMZrI",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 962.4723655451164,
			"y": 29.068465023989347,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 145510110,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "f1esZIIxFsYqYbm4rnZfd",
					"type": "arrow"
				},
				{
					"id": "9dcAqQBuYmkFu-X-CSdCR",
					"type": "arrow"
				},
				{
					"id": "VFk2HMuGGLXYnShyyDlVh",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 599,
			"versionNonce": 1657644482,
			"isDeleted": false,
			"id": "f1esZIIxFsYqYbm4rnZfd",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 973.5039440254773,
			"y": -71.37413861465618,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 1.6415323494454697,
			"height": 96.39639081644057,
			"seed": 1033574850,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "9ZnAC9T-R_wsrYmRumPE7",
				"focus": -0.2602173303725228,
				"gap": 1.004493975767275
			},
			"endBinding": {
				"elementId": "vTI0zcR0tV5FOHIYEMZrI",
				"focus": -0.014344558174217523,
				"gap": 4.046560370812044
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-1.6415323494454697,
					96.39639081644057
				]
			]
		},
		{
			"type": "arrow",
			"version": 1728,
			"versionNonce": 916066142,
			"isDeleted": false,
			"id": "ziPo5ft_u9UjjHGinvdWL",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1090.272932304375,
			"y": 26.92610849563556,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 353.57959162987163,
			"height": 203.8995203538015,
			"seed": 29509982,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "gyt1T5BmGMqi_0I0gtWJd",
				"focus": -0.29576018707504365,
				"gap": 2.030220335780097
			},
			"endBinding": {
				"elementId": "qm7ken_hLnb4T9vaxYHR_",
				"focus": 1.17609932959,
				"gap": 7.583297727715445
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-353.57959162987163,
					203.8995203538015
				]
			]
		},
		{
			"type": "arrow",
			"version": 1533,
			"versionNonce": 592944514,
			"isDeleted": false,
			"id": "_tTPEQyHKMvDOrmzsP95d",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1105.6780619114575,
			"y": 30.901794621110596,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 85.10566969773845,
			"height": 129.13058971749734,
			"seed": 1241946974,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "EB5ErEnf"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "gyt1T5BmGMqi_0I0gtWJd",
				"focus": 0.05456222767960605,
				"gap": 4.5377072172487996
			},
			"endBinding": {
				"elementId": "vzWMDlNkVNqdJw9FMdskZ",
				"focus": 0.44648181435757683,
				"gap": 11.465585049872145
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					85.10566969773845,
					129.13058971749734
				]
			]
		},
		{
			"type": "text",
			"version": 26,
			"versionNonce": 362574750,
			"isDeleted": false,
			"id": "EB5ErEnf",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1111.393293057898,
			"y": 44.664495693817685,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 87.5,
			"height": 24,
			"seed": 644894018,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "cherrypick",
			"rawText": "cherrypick",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_tTPEQyHKMvDOrmzsP95d",
			"originalText": "cherrypick",
			"lineHeight": 1.2
		},
		{
			"type": "ellipse",
			"version": 2150,
			"versionNonce": 2001509698,
			"isDeleted": false,
			"id": "bsESozbWHN71nTFYtE4-a",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1375.0176044515597,
			"y": 326.99961121078184,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 115963970,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 642,
			"versionNonce": 1732792286,
			"isDeleted": false,
			"id": "P1LUp-vweN14fbTvT-GOH",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 832.7915162038094,
			"y": -248.98323955530432,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 5.767041677141265,
			"height": 584.7910545882511,
			"seed": 1561594014,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.26711609382683393,
				"gap": 3.4547714950714514,
				"elementId": "aw4CAAArfru6wbCLq3Zi9"
			},
			"endBinding": {
				"elementId": "fa-VJqBl4y3W1xfJhLRjo",
				"focus": -0.02995832708792296,
				"gap": 9.556997769830433
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					5.767041677141265,
					584.7910545882511
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1690,
			"versionNonce": 1275831554,
			"isDeleted": false,
			"id": "fa-VJqBl4y3W1xfJhLRjo",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 829.7298601867049,
			"y": 345.3590285798887,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1377277314,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "Tn5Lg213YQllimKqkAbHw",
					"type": "arrow"
				},
				{
					"id": "YEcab3CGW62Tyq9nav7A8",
					"type": "arrow"
				},
				{
					"id": "bjE3I10Y9qhv0Tojb_OAM",
					"type": "arrow"
				},
				{
					"id": "nvQWrfEG4ib3CdgroMwdn",
					"type": "arrow"
				},
				{
					"id": "3LWmsUhf8uKnL5lJScBMp",
					"type": "arrow"
				},
				{
					"id": "BUnYET1yOraQVnBy8zBLN",
					"type": "arrow"
				},
				{
					"id": "P1LUp-vweN14fbTvT-GOH",
					"type": "arrow"
				},
				{
					"id": "zsyLfTfDCCiKwNkGoAwjQ",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1159,
			"versionNonce": 128885790,
			"isDeleted": false,
			"id": "zsyLfTfDCCiKwNkGoAwjQ",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1183.7567392637993,
			"y": 186.64305715618093,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 330.99853352825085,
			"height": 170.28751901697126,
			"seed": 1888630046,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.035723960727874524,
				"gap": 7.16123085153229,
				"elementId": "vzWMDlNkVNqdJw9FMdskZ"
			},
			"endBinding": {
				"focus": 0.8735631383228039,
				"gap": 4.605616467703408,
				"elementId": "fa-VJqBl4y3W1xfJhLRjo"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-330.99853352825085,
					170.28751901697126
				]
			]
		},
		{
			"type": "arrow",
			"version": 162,
			"versionNonce": 185840834,
			"isDeleted": false,
			"id": "c4J_TNIiVi_ingM8yDvWN",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 285.9711570405361,
			"y": -1100.1578624046474,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 1.7679261294013031,
			"height": 77.81036978300062,
			"seed": 350380318,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.4235837268935722,
				"gap": 7.651646779631619,
				"elementId": "0bSiUtis"
			},
			"endBinding": {
				"focus": 0.6146491639886739,
				"gap": 9.258689201169997,
				"elementId": "CU_i0j52KV5Sw-kO7v9mq"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.7679261294013031,
					77.81036978300062
				]
			]
		},
		{
			"type": "arrow",
			"version": 577,
			"versionNonce": 683700318,
			"isDeleted": false,
			"id": "4OD-AaThKlsKnXvWmR15I",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 206.4643300755879,
			"y": -1392.6388586267553,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0.7150312709320588,
			"height": 79.49695348212367,
			"seed": 626067394,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "QCOWxQzG",
				"focus": 0.3144217674830568,
				"gap": 2.512585131270953
			},
			"endBinding": {
				"elementId": "MlWZ5kRGTTkOauCs4pMNw",
				"focus": 0.504280534052555,
				"gap": 10.349778091467815
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.7150312709320588,
					79.49695348212367
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1398,
			"versionNonce": 369347714,
			"isDeleted": false,
			"id": "vzWMDlNkVNqdJw9FMdskZ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1189.2606543175473,
			"y": 169.97996202196228,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1209180190,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "7dQTG6vWCLALtBBPwrsIk",
					"type": "arrow"
				},
				{
					"id": "zsyLfTfDCCiKwNkGoAwjQ",
					"type": "arrow"
				},
				{
					"id": "_tTPEQyHKMvDOrmzsP95d",
					"type": "arrow"
				},
				{
					"id": "V4Cuoruw16eQwCd_N9YqJ",
					"type": "arrow"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1201,
			"versionNonce": 374256798,
			"isDeleted": false,
			"id": "_UPE9EuW953c_EAOaG0eR",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1374.2257645850357,
			"y": -137.00766721441252,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 162.12307874009002,
			"height": 211.53396346158198,
			"seed": 1823815554,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "npxSqkWlpfhF23jV7-u8f",
				"focus": 0.5652141010619474,
				"gap": 4.298835724768363
			},
			"endBinding": {
				"elementId": "XX1-p-wZ9ShifT7BBDFgT",
				"focus": 0.9649510820434863,
				"gap": 5.228741554069471
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-162.12307874009002,
					211.53396346158198
				]
			]
		},
		{
			"type": "arrow",
			"version": 937,
			"versionNonce": 1117449282,
			"isDeleted": false,
			"id": "V4Cuoruw16eQwCd_N9YqJ",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1209.4736895952847,
			"y": 185.91651408138392,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 166.46529366991263,
			"height": 151.21859265951292,
			"seed": 248414174,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.24913676545039487,
				"gap": 3.393498714870759,
				"elementId": "vzWMDlNkVNqdJw9FMdskZ"
			},
			"endBinding": {
				"focus": -0.30053861459657294,
				"gap": 1.4245198098298228,
				"elementId": "bsESozbWHN71nTFYtE4-a"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					166.46529366991263,
					151.21859265951292
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1115,
			"versionNonce": 2047504606,
			"isDeleted": false,
			"id": "_HeXXRN81d-mHkOzRk2n2",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1502.1631389269962,
			"y": 260.24905705342707,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 81.62035007530358,
			"height": 41.32160242006783,
			"seed": 914557122,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "LAgLHP6B5WIRPXj2JRuOu",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "VHjAdFHc"
				}
			],
			"updated": 1717151637232,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1073,
			"versionNonce": 1454904322,
			"isDeleted": false,
			"id": "VHjAdFHc",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1513.5893417966793,
			"y": 270.909858263461,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 58.7679443359375,
			"height": 20,
			"seed": 1080598658,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "tagxx1.1",
			"rawText": "tagxx1.1",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_HeXXRN81d-mHkOzRk2n2",
			"originalText": "tagxx1.1",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 1633,
			"versionNonce": 528786718,
			"isDeleted": false,
			"id": "LAgLHP6B5WIRPXj2JRuOu",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1499.6494723426774,
			"y": 290.0954413165113,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 102.26130770984742,
			"height": 38.02606147308205,
			"seed": 1900363842,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "_HeXXRN81d-mHkOzRk2n2",
				"gap": 2.5136665843187984,
				"focus": 0.19322516148119107
			},
			"endBinding": {
				"elementId": "bsESozbWHN71nTFYtE4-a",
				"gap": 6.1555773237315705,
				"focus": -0.34197860412853714
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-102.26130770984742,
					38.02606147308205
				]
			]
		},
		{
			"type": "arrow",
			"version": 1069,
			"versionNonce": 73024450,
			"isDeleted": false,
			"id": "wwKLfg2eikXduMWW1DaBP",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 711.2939825074983,
			"y": -463.2870139846314,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0.22909159883977281,
			"height": 145.22790259114998,
			"seed": 2088240450,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"type": "text",
					"id": "axzmWKaG"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "cCz4X_vexnbFv-SeeucWC",
				"focus": 0.43384089219580035,
				"gap": 4.35243676067258
			},
			"endBinding": {
				"elementId": "4yswiY_NB-5H6sy5suh7f",
				"focus": 0.06879144851068594,
				"gap": 8.80121143422953
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.22909159883977281,
					145.22790259114998
				]
			]
		},
		{
			"type": "text",
			"version": 20,
			"versionNonce": 942559582,
			"isDeleted": false,
			"id": "axzmWKaG",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 683.8972251089708,
			"y": -478.54094568520014,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 52.34375,
			"height": 24,
			"seed": 1203935006,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "revert",
			"rawText": "revert",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "wwKLfg2eikXduMWW1DaBP",
			"originalText": "revert",
			"lineHeight": 1.2
		},
		{
			"type": "ellipse",
			"version": 1309,
			"versionNonce": 1705016194,
			"isDeleted": false,
			"id": "4yswiY_NB-5H6sy5suh7f",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 701.1026394389083,
			"y": -309.2703177222552,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 177274334,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "C-E4aP2ATOfgK1N_GqXDu",
					"type": "arrow"
				},
				{
					"id": "wwKLfg2eikXduMWW1DaBP",
					"type": "arrow"
				},
				{
					"id": "tFeFpfHmdxZUuucKpJEiP",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1217,
			"versionNonce": 525890974,
			"isDeleted": false,
			"id": "tFeFpfHmdxZUuucKpJEiP",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1069.0630530133355,
			"y": -320.89870662883413,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 335.7858487500936,
			"height": 23.535891757066338,
			"seed": 214241602,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "q70ygEeLzOAXUfAc0qMEm",
				"focus": 0.5053937509478122,
				"gap": 12.884619738276001
			},
			"endBinding": {
				"elementId": "4yswiY_NB-5H6sy5suh7f",
				"focus": 0.43422312845527644,
				"gap": 13.720306408880717
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-335.7858487500936,
					23.535891757066338
				]
			]
		},
		{
			"type": "text",
			"version": 1499,
			"versionNonce": 2026486594,
			"isDeleted": false,
			"id": "KlCzGXfa",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 89.36071709029855,
			"y": -810.917918957204,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 17.663970947265625,
			"height": 20,
			"seed": 1608673438,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "h6uKponbVpUlMKewnPSF-",
					"type": "arrow"
				},
				{
					"id": "HuSQh1fda3xyMkgGQ1IZo",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "f5",
			"rawText": "f5",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f5",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 1846,
			"versionNonce": 506728926,
			"isDeleted": false,
			"id": "L0N4xllAgcmyC6N7c5fL7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 82.02399188997921,
			"y": -696.9775977334307,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1057465566,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "c5BOxzDSKj8IGWYmVa49x",
					"type": "arrow"
				},
				{
					"id": "h6uKponbVpUlMKewnPSF-",
					"type": "arrow"
				},
				{
					"id": "MkiVn8NVjOyXjrXFlAuKZ",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 2843,
			"versionNonce": 473236226,
			"isDeleted": false,
			"id": "c5BOxzDSKj8IGWYmVa49x",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 91.5103236577081,
			"y": -673.5804576970712,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 3.232162889063389,
			"height": 109.9550883515576,
			"seed": 918247710,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "L0N4xllAgcmyC6N7c5fL7",
				"focus": 0.02354090008934771,
				"gap": 4.570926711538542
			},
			"endBinding": {
				"elementId": "E69_HDq8njWzGrsPRn5OG",
				"focus": -0.09228224350507735,
				"gap": 4.42673963485117
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					3.232162889063389,
					109.9550883515576
				]
			]
		},
		{
			"type": "ellipse",
			"version": 2328,
			"versionNonce": 802301470,
			"isDeleted": false,
			"id": "E69_HDq8njWzGrsPRn5OG",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 86.71149567867215,
			"y": -559.2574054987665,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 510559582,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "c5BOxzDSKj8IGWYmVa49x",
					"type": "arrow"
				},
				{
					"id": "fhoOlMdIIunbyRq09IOYY",
					"type": "arrow"
				},
				{
					"id": "EWk4pnCLI2IlwDUPgbZDj",
					"type": "arrow"
				},
				{
					"id": "xNDghdFcVxmdoFRyGqdZy",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2273,
			"versionNonce": 174150338,
			"isDeleted": false,
			"id": "75FLkYWga4ypZDucPX5PJ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 89.6562705919516,
			"y": -457.1319940837493,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 930228638,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "fhoOlMdIIunbyRq09IOYY",
					"type": "arrow"
				},
				{
					"id": "5v4aikO-K_nL-lBXIUHJB",
					"type": "arrow"
				},
				{
					"id": "ZemFeu4Xl-oCVMIB4QTL_",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 3120,
			"versionNonce": 1159967326,
			"isDeleted": false,
			"id": "fhoOlMdIIunbyRq09IOYY",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 93.64968949386122,
			"y": -535.1894944039987,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 1.3023967956575149,
			"height": 67.98734368435635,
			"seed": 1895253470,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "E69_HDq8njWzGrsPRn5OG",
				"focus": 0.2836408451357323,
				"gap": 5.431577618133332
			},
			"endBinding": {
				"elementId": "75FLkYWga4ypZDucPX5PJ",
				"focus": -0.3899684536883939,
				"gap": 10.481043747245261
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.3023967956575149,
					67.98734368435635
				]
			]
		},
		{
			"type": "arrow",
			"version": 2154,
			"versionNonce": 1441639042,
			"isDeleted": false,
			"id": "h6uKponbVpUlMKewnPSF-",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 94.70220653857584,
			"y": -783.2662721775724,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 1.8944729382637888,
			"height": 77.80167133482632,
			"seed": 739170846,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "KlCzGXfa",
				"focus": 0.43196741594576493,
				"gap": 7.651646779631619
			},
			"endBinding": {
				"elementId": "L0N4xllAgcmyC6N7c5fL7",
				"focus": 0.6146491639886752,
				"gap": 9.258660828207326
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.8944729382637888,
					77.80167133482632
				]
			]
		},
		{
			"type": "arrow",
			"version": 1999,
			"versionNonce": 150582942,
			"isDeleted": false,
			"id": "xNDghdFcVxmdoFRyGqdZy",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 703.6961977090548,
			"y": -557.9282240306715,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 591.7929377109285,
			"height": 8.909060929878251,
			"seed": 2142272094,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.32061270545952786,
				"gap": 1.1598801797820233,
				"elementId": "yZI_DtfhVAXIPqZuzvBJB"
			},
			"endBinding": {
				"focus": 0.11299126056533543,
				"gap": 6.624456875669583,
				"elementId": "E69_HDq8njWzGrsPRn5OG"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-591.7929377109285,
					8.909060929878251
				]
			]
		},
		{
			"type": "arrow",
			"version": 1253,
			"versionNonce": 1704528450,
			"isDeleted": false,
			"id": "rJ5LKxBVaq5UZYBCFA-nR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 556.220122426002,
			"y": -565.2485567566564,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 0.7155782442994223,
			"height": 511.93201707997343,
			"seed": 1644772958,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.055335479093541674,
				"gap": 12.349364613282962,
				"elementId": "I4AO728WHef6VTdFWBzk6"
			},
			"endBinding": {
				"focus": 0.1506439411595159,
				"gap": 3.6106521912862117,
				"elementId": "XL7FTkdmExZ-AVUZGMIts"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.7155782442994223,
					511.93201707997343
				]
			]
		},
		{
			"type": "arrow",
			"version": 1656,
			"versionNonce": 604320478,
			"isDeleted": false,
			"id": "ZemFeu4Xl-oCVMIB4QTL_",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 113.27020892047553,
			"y": -451.036660688339,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 227.33120263222673,
			"height": 84.33914453410881,
			"seed": 1317532254,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.8609161417926272,
				"gap": 5.399023740723248,
				"elementId": "75FLkYWga4ypZDucPX5PJ"
			},
			"endBinding": {
				"focus": -0.3399803890685708,
				"gap": 4.685250205369231,
				"elementId": "LG-SuWN8EjRTD65IVaYLu"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					227.33120263222673,
					84.33914453410881
				]
			]
		},
		{
			"type": "arrow",
			"version": 827,
			"versionNonce": 1883402754,
			"isDeleted": false,
			"id": "C-E4aP2ATOfgK1N_GqXDu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 711.5346583930536,
			"y": -284.0163675369074,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 7.22054732945162,
			"height": 491.8724368540042,
			"seed": 1392497282,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "4yswiY_NB-5H6sy5suh7f",
				"focus": -0.09822227517564466,
				"gap": 6.467829311146211
			},
			"endBinding": {
				"elementId": "qm7ken_hLnb4T9vaxYHR_",
				"focus": -0.11489774604386971,
				"gap": 10.423696167983463
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					7.22054732945162,
					491.8724368540042
				]
			]
		},
		{
			"type": "rectangle",
			"version": 2045,
			"versionNonce": 14100254,
			"isDeleted": false,
			"id": "q70ygEeLzOAXUfAc0qMEm",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1081.9476727516114,
			"y": -344.3930398156159,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 202.6652492778588,
			"height": 77.14513454190978,
			"seed": 1838574978,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "2-O_5ZbcNq6FviTHG7pxw",
					"type": "arrow"
				},
				{
					"id": "tFeFpfHmdxZUuucKpJEiP",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "8PqLoKpV"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2047,
			"versionNonce": 2028528066,
			"isDeleted": false,
			"id": "8PqLoKpV",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1087.108422390541,
			"y": -329.820472544661,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 192.34375,
			"height": 48,
			"seed": 825322818,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "回滚代码使用revert，\n避免使用reset",
			"rawText": "回滚代码使用revert，避免使用reset",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "q70ygEeLzOAXUfAc0qMEm",
			"originalText": "回滚代码使用revert，避免使用reset",
			"lineHeight": 1.2
		},
		{
			"type": "ellipse",
			"version": 1614,
			"versionNonce": 266376030,
			"isDeleted": false,
			"id": "qm7ken_hLnb4T9vaxYHR_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 710.8195433347407,
			"y": 218.23262640417977,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 883405086,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "Hu_U6hdFUc10IcAm7-8qd",
					"type": "arrow"
				},
				{
					"id": "C-E4aP2ATOfgK1N_GqXDu",
					"type": "arrow"
				},
				{
					"id": "ziPo5ft_u9UjjHGinvdWL",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 557,
			"versionNonce": 657706846,
			"isDeleted": false,
			"id": "UsW5ojpr_WUW1Nj-TqfLU",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -192.99755242209602,
			"y": -1237.8904161840933,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"width": 254.72481688886467,
			"height": 130,
			"seed": 16289118,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "E3o0BjG4"
				},
				{
					"id": "FOo7N305vZiNikONA4Qjn",
					"type": "arrow"
				}
			],
			"updated": 1717152534888,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 753,
			"versionNonce": 1291727774,
			"isDeleted": false,
			"id": "E3o0BjG4",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -187.9007689776637,
			"y": -1232.8904161840933,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 244.53125,
			"height": 120,
			"seed": 7817118,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717152534888,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "【建议】当feater分支已合\n并到test并通过测试，合到d\nevelop后，推荐删除，新业\n务的开发从develop拉出新分\n支开发",
			"rawText": "【建议】当feater分支已合并到test并通过测试，合到develop后，推荐删除，新业务的开发从develop拉出新分支开发",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "UsW5ojpr_WUW1Nj-TqfLU",
			"originalText": "【建议】当feater分支已合并到test并通过测试，合到develop后，推荐删除，新业务的开发从develop拉出新分支开发",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 916,
			"versionNonce": 564159518,
			"isDeleted": false,
			"id": "FOo7N305vZiNikONA4Qjn",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 66.19016813432631,
			"y": -1109.342698002246,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"width": 119.63630207186142,
			"height": 13.481352890924427,
			"seed": 1335013826,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717152534888,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "UsW5ojpr_WUW1Nj-TqfLU",
				"gap": 4.462903667557612,
				"focus": 0.6132600917473102
			},
			"endBinding": {
				"elementId": "YXn4oUflANBrznhLtC4zy",
				"gap": 13.663622083337705,
				"focus": 0.7467224232605655
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					119.63630207186142,
					13.481352890924427
				]
			]
		},
		{
			"type": "arrow",
			"version": 365,
			"versionNonce": 1002296286,
			"isDeleted": false,
			"id": "MkiVn8NVjOyXjrXFlAuKZ",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 269.42253771632573,
			"y": -937.2215679526371,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 164.05234899753813,
			"height": 247.6782424566038,
			"seed": 2461022,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "qCwa2FxFtZkhn-uk7vqly",
				"focus": 0.946298104387043,
				"gap": 4.819527586009443
			},
			"endBinding": {
				"elementId": "L0N4xllAgcmyC6N7c5fL7",
				"focus": 1.1383908843458954,
				"gap": 4.894280900233262
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-164.05234899753813,
					247.6782424566038
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1390,
			"versionNonce": 1184915714,
			"isDeleted": false,
			"id": "lMSQksEkxqUM_x-gPiPvm",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 427.5388479854638,
			"y": -870.8719466587397,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1460492190,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "6_jIXS3Vr6hdGdzjpUgJW",
					"type": "arrow"
				},
				{
					"id": "uzcLSUjPBQSN_7ShIErH7",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 985,
			"versionNonce": 986949662,
			"isDeleted": false,
			"id": "4IiI4Q5e",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 427.33067505922105,
			"y": -973.0518543839719,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 17.663970947265625,
			"height": 20,
			"seed": 604214942,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "o7WIzY222B3DLP8rEgQGI",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "f5",
			"rawText": "f5",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f5",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 1667,
			"versionNonce": 1269887170,
			"isDeleted": false,
			"id": "O-ztf6nmuoD01WAnKrVjv",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 552.5223378854553,
			"y": -861.4234475649525,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1587506590,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "mF2NsK5OAO_CmSmv6kkvB",
					"type": "arrow"
				},
				{
					"id": "egsNM1cQmZXS2vLnnfffG",
					"type": "arrow"
				},
				{
					"id": "JGGBpnvIHxMNL_53clQGe",
					"type": "arrow"
				},
				{
					"id": "pqVdyqTB08AH9lJBKUnjq",
					"type": "arrow"
				},
				{
					"id": "6_jIXS3Vr6hdGdzjpUgJW",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 655,
			"versionNonce": 950334558,
			"isDeleted": false,
			"id": "pqVdyqTB08AH9lJBKUnjq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 563.0184138270885,
			"y": -837.5187842263688,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 0.7892539718492344,
			"height": 82.2014545906701,
			"seed": 527577090,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.11253494667138607,
				"gap": 5.127692626546308,
				"elementId": "O-ztf6nmuoD01WAnKrVjv"
			},
			"endBinding": {
				"focus": 0.38633471282958437,
				"gap": 8.09388582873143,
				"elementId": "MHPqF6KnsnTuIjmPE90By"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.7892539718492344,
					82.2014545906701
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1431,
			"versionNonce": 1201244290,
			"isDeleted": false,
			"id": "CU_i0j52KV5Sw-kO7v9mq",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 427.6656760221447,
			"y": -920.211869512048,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1043041246,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "o7WIzY222B3DLP8rEgQGI",
					"type": "arrow"
				},
				{
					"id": "2euRC-OZkmsxUnsR28LP8",
					"type": "arrow"
				},
				{
					"id": "QakXxObGF8USAiqvDE9lN",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 531,
			"versionNonce": 1057142942,
			"isDeleted": false,
			"id": "o7WIzY222B3DLP8rEgQGI",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 438.1365818883685,
			"y": -949.8231725342279,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 0.35425292439958866,
			"height": 26.42833584637276,
			"seed": 149154050,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "4IiI4Q5e",
				"focus": -0.2399325867373988,
				"gap": 3.228681849744021
			},
			"endBinding": {
				"elementId": "CU_i0j52KV5Sw-kO7v9mq",
				"focus": 0.07031988713541472,
				"gap": 3.2103036188629765
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.35425292439958866,
					26.42833584637276
				]
			]
		},
		{
			"type": "arrow",
			"version": 307,
			"versionNonce": 840509506,
			"isDeleted": false,
			"id": "2euRC-OZkmsxUnsR28LP8",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 436.22905150772283,
			"y": -897.7106893124433,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 1.6053649097345897,
			"height": 29.402420770428648,
			"seed": 2139673566,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "CU_i0j52KV5Sw-kO7v9mq",
				"focus": 0.15527627306994926,
				"gap": 3.6943881827996936
			},
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.6053649097345897,
					29.402420770428648
				]
			]
		},
		{
			"type": "arrow",
			"version": 864,
			"versionNonce": 1973286110,
			"isDeleted": false,
			"id": "6_jIXS3Vr6hdGdzjpUgJW",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 448.4972004282513,
			"y": -854.7511106426948,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 103.28891845959936,
			"height": 5.083777106499269,
			"seed": 1968982494,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "lMSQksEkxqUM_x-gPiPvm",
				"focus": 0.650921118155779,
				"gap": 4.131422314260821
			},
			"endBinding": {
				"elementId": "O-ztf6nmuoD01WAnKrVjv",
				"focus": -0.3009078122050994,
				"gap": 1
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					103.28891845959936,
					5.083777106499269
				]
			]
		},
		{
			"type": "arrow",
			"version": 1006,
			"versionNonce": 856608770,
			"isDeleted": false,
			"id": "SFCvxDfHeNCyJLXg6WGor",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 799.1748063467587,
			"y": -917.5022448796399,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 211.39508070074896,
			"height": 129.69893835050107,
			"seed": 1824290398,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "hcS-Qj3dbfjSNH-Ck10V7",
				"focus": 0.07420769282901095,
				"gap": 7.817143574543479
			},
			"endBinding": {
				"elementId": "POvdbMr5IajHocviriZRo",
				"focus": 0.5992881039425684,
				"gap": 3.477389801202605
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-211.39508070074896,
					129.69893835050107
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1972,
			"versionNonce": 1711778078,
			"isDeleted": false,
			"id": "W83-g618AySMyZqeMQt8t",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 711.395803883484,
			"y": 396.7963449346007,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 2013269022,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "YEcab3CGW62Tyq9nav7A8",
					"type": "arrow"
				},
				{
					"id": "VUUSfYE3M-MvAOwSXRJnp",
					"type": "arrow"
				},
				{
					"id": "wwKLfg2eikXduMWW1DaBP",
					"type": "arrow"
				},
				{
					"id": "C-E4aP2ATOfgK1N_GqXDu",
					"type": "arrow"
				},
				{
					"id": "Hu_U6hdFUc10IcAm7-8qd",
					"type": "arrow"
				},
				{
					"id": "9dcAqQBuYmkFu-X-CSdCR",
					"type": "arrow"
				},
				{
					"id": "ziPo5ft_u9UjjHGinvdWL",
					"type": "arrow"
				},
				{
					"id": "mhxDM21GqLVPFXIaHrfAe",
					"type": "arrow"
				},
				{
					"id": "zULlobt91g-6DsXsI5Toi",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1573,
			"versionNonce": 511279042,
			"isDeleted": false,
			"id": "Hu_U6hdFUc10IcAm7-8qd",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 721.1287300410909,
			"y": 241.11679590466292,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 2.024511240305287,
			"height": 145.93393319977793,
			"seed": 1293930782,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "qm7ken_hLnb4T9vaxYHR_",
				"focus": -0.08715758751048217,
				"gap": 4.095484371913601
			},
			"endBinding": {
				"elementId": "W83-g618AySMyZqeMQt8t",
				"focus": 0.2936016261912496,
				"gap": 9.905276208252406
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					2.024511240305287,
					145.93393319977793
				]
			]
		},
		{
			"type": "arrow",
			"version": 944,
			"versionNonce": 1068553566,
			"isDeleted": false,
			"id": "9dcAqQBuYmkFu-X-CSdCR",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1085.8314490429282,
			"y": 16.589577446553797,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"width": 95.50551327573567,
			"height": 23.156707595202754,
			"seed": 318979906,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "gyt1T5BmGMqi_0I0gtWJd",
				"focus": 0.5658395443443325,
				"gap": 3.5484545001248904
			},
			"endBinding": {
				"elementId": "vTI0zcR0tV5FOHIYEMZrI",
				"focus": 0.5954739713383971,
				"gap": 9.307663584416915
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-95.50551327573567,
					23.156707595202754
				]
			]
		},
		{
			"type": "rectangle",
			"version": 452,
			"versionNonce": 1446983938,
			"isDeleted": false,
			"id": "lVDkLDNST_T45YQy35Klc",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -187.50923442464745,
			"y": -1062.061865801807,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 317.8651155988588,
			"height": 178,
			"seed": 1208830466,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "HuSQh1fda3xyMkgGQ1IZo",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "7rf2vpja"
				}
			],
			"updated": 1717152185763,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 753,
			"versionNonce": 1322721182,
			"isDeleted": false,
			"id": "7rf2vpja",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -180.10011412521806,
			"y": -1033.061865801807,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 303.046875,
			"height": 120,
			"seed": 1100528066,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717152185763,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "如果当前featuer有需要提交测试的\n内容，但是被提测节点阻塞时，且\n后续的开发需要基于当前的feature\n内容，需要在当前feature上拉新的\n分支开发，以避免影响提测",
			"rawText": "如果当前featuer有需要提交测试的内容，但是被提测节点阻塞时，且后续的开发需要基于当前的feature内容，需要在当前feature上拉新的分支开发，以避免影响提测",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "lVDkLDNST_T45YQy35Klc",
			"originalText": "如果当前featuer有需要提交测试的内容，但是被提测节点阻塞时，且后续的开发需要基于当前的feature内容，需要在当前feature上拉新的分支开发，以避免影响提测",
			"lineHeight": 1.2
		},
		{
			"type": "rectangle",
			"version": 1211,
			"versionNonce": 1229584194,
			"isDeleted": false,
			"id": "WlxxBOqd-IQS4O6xx_lrL",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1191.859214133859,
			"y": -1490.0897873432168,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 186.02972095745736,
			"height": 58,
			"seed": 404846814,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "lnH2Bxx9aJy-oWEmQezDJ",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "cgsaaSZD"
				},
				{
					"id": "HRBFQaDGZeuEJQu2x8bhn",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1170,
			"versionNonce": 1105565150,
			"isDeleted": false,
			"id": "cgsaaSZD",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1204.8740746125877,
			"y": -1485.0897873432168,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 160,
			"height": 48,
			"seed": 1970973982,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "master\n作为发布分支使用",
			"rawText": "master 作为发布分支使用",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "WlxxBOqd-IQS4O6xx_lrL",
			"originalText": "master 作为发布分支使用",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 58,
			"versionNonce": 1766702850,
			"isDeleted": false,
			"id": "HRBFQaDGZeuEJQu2x8bhn",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1188.543853258075,
			"y": -1463.38135541151,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 178.32922279817546,
			"height": 12.17573617421499,
			"seed": 648344002,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "WlxxBOqd-IQS4O6xx_lrL",
				"gap": 3.3153608757841084,
				"focus": 0.25087672664434024
			},
			"endBinding": {
				"elementId": "bLBl2z8M",
				"gap": 10.558439573740657,
				"focus": 0.11137735432416172
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-178.32922279817546,
					12.17573617421499
				]
			]
		},
		{
			"type": "arrow",
			"version": 978,
			"versionNonce": 90353986,
			"isDeleted": false,
			"id": "HuSQh1fda3xyMkgGQ1IZo",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -12.874512619589446,
			"y": -870.4830997457406,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 109.64438849703163,
			"height": 52.231385218750006,
			"seed": 1216987294,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717152185763,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.5426890571790981,
				"gap": 8.42069828404476,
				"elementId": "lVDkLDNST_T45YQy35Klc"
			},
			"endBinding": {
				"focus": 1.1723552316803072,
				"gap": 7.333795569786503,
				"elementId": "KlCzGXfa"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					109.64438849703163,
					52.231385218750006
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1947,
			"versionNonce": 755142338,
			"isDeleted": false,
			"id": "I4AO728WHef6VTdFWBzk6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 547.378198468416,
			"y": -596.420726065073,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1083701122,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "rJ5LKxBVaq5UZYBCFA-nR",
					"type": "arrow"
				},
				{
					"id": "UnGnUpMZqf8QUqN7zYJ7D",
					"type": "arrow"
				},
				{
					"id": "k8OtUFQJL-fZtNBQxG2sB",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 748,
			"versionNonce": 88356446,
			"isDeleted": false,
			"id": "-xWV05qD0VhVEhnlrV0fa",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 558.5240626058954,
			"y": -647.0272136157937,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 3.0265028545909445,
			"height": 55.72022890146309,
			"seed": 1227097374,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.09690599401324768,
				"gap": 2.9272850958775063,
				"elementId": "MHPqF6KnsnTuIjmPE90By"
			},
			"endBinding": {
				"focus": 0.4103670537114965,
				"gap": 5.992421852979762,
				"elementId": "I4AO728WHef6VTdFWBzk6"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-3.0265028545909445,
					55.72022890146309
				]
			]
		},
		{
			"type": "arrow",
			"version": 708,
			"versionNonce": 151479938,
			"isDeleted": false,
			"id": "k8OtUFQJL-fZtNBQxG2sB",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 293.0076986585972,
			"y": -815.5655957483199,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 247.44077097825505,
			"height": 218.4377048485876,
			"seed": 685685086,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "j3ixQlZiLJha4TcLPXkxw",
				"focus": -0.048767094359442216,
				"gap": 1
			},
			"endBinding": {
				"elementId": "I4AO728WHef6VTdFWBzk6",
				"focus": -0.3364422526315189,
				"gap": 9.794405292234538
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					247.44077097825505,
					218.4377048485876
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1664,
			"versionNonce": 2053749406,
			"isDeleted": false,
			"id": "wn7RXI_pXYNJ64xKlhgPp",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 429.34562261776534,
			"y": -787.1510497323578,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 648769694,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "vArEYUXMzeramwZbWlnMf",
					"type": "arrow"
				},
				{
					"id": "5BMA3xeS4QN3eWdeYI2Zi",
					"type": "arrow"
				},
				{
					"id": "k8OtUFQJL-fZtNBQxG2sB",
					"type": "arrow"
				},
				{
					"id": "uzcLSUjPBQSN_7ShIErH7",
					"type": "arrow"
				},
				{
					"id": "P5DrMI5MyodHViSJZrA_b",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 51,
			"versionNonce": 102450754,
			"isDeleted": false,
			"id": "uzcLSUjPBQSN_7ShIErH7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 437.3746458947371,
			"y": -849.8782687078907,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 0.03377283557961164,
			"height": 56.53839894623616,
			"seed": 2030086466,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637233,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "lMSQksEkxqUM_x-gPiPvm",
				"focus": -0.059019545960546586,
				"gap": 2.1790460065138877
			},
			"endBinding": {
				"elementId": "wn7RXI_pXYNJ64xKlhgPp",
				"focus": -0.14075978199024827,
				"gap": 6.243625445552228
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.03377283557961164,
					56.53839894623616
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1661,
			"versionNonce": 1892988638,
			"isDeleted": false,
			"id": "MHPqF6KnsnTuIjmPE90By",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 549.727027325888,
			"y": -668.7718405849139,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1626631966,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "-xWV05qD0VhVEhnlrV0fa",
					"type": "arrow"
				},
				{
					"id": "M-i69j4rNYTlUJlwIe726",
					"type": "arrow"
				},
				{
					"id": "P5DrMI5MyodHViSJZrA_b",
					"type": "arrow"
				}
			],
			"updated": 1717151637233,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 61,
			"versionNonce": 1025322498,
			"isDeleted": false,
			"id": "M-i69j4rNYTlUJlwIe726",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 561.4550085823182,
			"y": -729.3056733616575,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 2.153807142524556,
			"height": 52.92835218405469,
			"seed": 1320580958,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "VN_dAZrUgt78f6zUFRXcq",
				"focus": -0.15146209866585666,
				"gap": 1.5238341209036772
			},
			"endBinding": {
				"elementId": "MHPqF6KnsnTuIjmPE90By",
				"focus": -0.044352013305126864,
				"gap": 7.60781637122388
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-2.153807142524556,
					52.92835218405469
				]
			]
		},
		{
			"type": "arrow",
			"version": 91,
			"versionNonce": 286665502,
			"isDeleted": false,
			"id": "P5DrMI5MyodHViSJZrA_b",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 447.2351601480483,
			"y": -771.3292159765076,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 96.9817631522302,
			"height": 99.8805126509094,
			"seed": 1813894914,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "wn7RXI_pXYNJ64xKlhgPp",
				"focus": -0.181043163581628,
				"gap": 1.384719526573166
			},
			"endBinding": {
				"elementId": "MHPqF6KnsnTuIjmPE90By",
				"focus": -0.2350864334266417,
				"gap": 9.772376914886273
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					96.9817631522302,
					99.8805126509094
				]
			]
		},
		{
			"type": "arrow",
			"version": 414,
			"versionNonce": 1393302978,
			"isDeleted": false,
			"id": "UnGnUpMZqf8QUqN7zYJ7D",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 568.3386040705717,
			"y": -583.7924857354674,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 128.99764396644423,
			"height": 21.46336119031912,
			"seed": 144515102,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "I4AO728WHef6VTdFWBzk6",
				"focus": 0.1334775168338915,
				"gap": 2.7984650497493657
			},
			"endBinding": {
				"elementId": "yZI_DtfhVAXIPqZuzvBJB",
				"focus": -0.15570593826191426,
				"gap": 7.085128472902744
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					128.99764396644423,
					21.46336119031912
				]
			]
		},
		{
			"type": "rectangle",
			"version": 1867,
			"versionNonce": 1235162974,
			"isDeleted": false,
			"id": "YYcfqYWn91OojurDY-A3d",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 796.5244772269562,
			"y": -700.607394584694,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 152.43239841929056,
			"height": 75.77416638575914,
			"seed": 196138114,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "U1rWqu1V"
				},
				{
					"id": "f2rtc5rP_7_pLzZ7D0P_a",
					"type": "arrow"
				},
				{
					"id": "SFCvxDfHeNCyJLXg6WGor",
					"type": "arrow"
				},
				{
					"id": "SbbnYlup6f10zD2u9j32e",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1817,
			"versionNonce": 1963398530,
			"isDeleted": false,
			"id": "U1rWqu1V",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 803.7563014366015,
			"y": -686.7203113918144,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 137.96875,
			"height": 48,
			"seed": 700086082,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "测试通过合入de\nvelop等待发布",
			"rawText": "测试通过合入develop等待发布",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "YYcfqYWn91OojurDY-A3d",
			"originalText": "测试通过合入develop等待发布",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 1113,
			"versionNonce": 314604446,
			"isDeleted": false,
			"id": "5v4aikO-K_nL-lBXIUHJB",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 101.5063502870089,
			"y": -430.85305977191473,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 2.785364098309657,
			"height": 143.6693226852954,
			"seed": 2141840990,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "75FLkYWga4ypZDucPX5PJ",
				"focus": -0.23954614307503475,
				"gap": 7.646664265298254
			},
			"endBinding": {
				"elementId": "h-TiBTxid9PwY51JBqnqR",
				"focus": -0.20745721830039443,
				"gap": 3.07902531758241
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					2.785364098309657,
					143.6693226852954
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1791,
			"versionNonce": 1414337858,
			"isDeleted": false,
			"id": "XL7FTkdmExZ-AVUZGMIts",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 547.0117583246099,
			"y": -53.581956819057496,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1353243650,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "5fqbpG5yICn4oZSK4yFls",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2518,
			"versionNonce": 850089950,
			"isDeleted": false,
			"id": "h-TiBTxid9PwY51JBqnqR",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 97.16451201130215,
			"y": -284.2977940623939,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 2090429086,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "5v4aikO-K_nL-lBXIUHJB",
					"type": "arrow"
				},
				{
					"id": "UsmCAD5m4ZnrT_WlDIqk9",
					"type": "arrow"
				},
				{
					"id": "XiPEdO5csJRBAKM5bV_8j",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1008,
			"versionNonce": 574430466,
			"isDeleted": false,
			"id": "UsmCAD5m4ZnrT_WlDIqk9",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 128.6754565537027,
			"y": -276.146025098309,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 218.55020312674515,
			"height": 95.46661320802966,
			"seed": 815017730,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -1.069274812796216,
				"gap": 12.958024104720163,
				"elementId": "h-TiBTxid9PwY51JBqnqR"
			},
			"endBinding": {
				"focus": -0.06832954056814432,
				"gap": 5.767648923129062,
				"elementId": "vqJ1hr2J2uHh8TvQaOgxr"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					218.55020312674515,
					95.46661320802966
				]
			]
		},
		{
			"type": "rectangle",
			"version": 2181,
			"versionNonce": 633316738,
			"isDeleted": false,
			"id": "_zwYxmNywDXv7ZXw2hDnx",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 191.3542596138608,
			"y": -679.7444165349832,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 188.917729126748,
			"height": 106,
			"seed": 215446530,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "WagqSFwY"
				},
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "2-O_5ZbcNq6FviTHG7pxw",
					"type": "arrow"
				},
				{
					"id": "tFeFpfHmdxZUuucKpJEiP",
					"type": "arrow"
				},
				{
					"id": "EWk4pnCLI2IlwDUPgbZDj",
					"type": "arrow"
				}
			],
			"updated": 1717152157587,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2207,
			"versionNonce": 2138285378,
			"isDeleted": false,
			"id": "WagqSFwY",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 198.23499917723478,
			"y": -674.7444165349832,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 175.15625,
			"height": 96,
			"seed": 1733745374,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717152157587,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "从develop到feature\n或者test的合并没有\n限制，从test到feat\nure的合并没有限制",
			"rawText": "从develop到feature或者test的合并没有限制，从test到feature的合并没有限制",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_zwYxmNywDXv7ZXw2hDnx",
			"originalText": "从develop到feature或者test的合并没有限制，从test到feature的合并没有限制",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 1126,
			"versionNonce": 1796783298,
			"isDeleted": false,
			"id": "EWk4pnCLI2IlwDUPgbZDj",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 190.13851300892244,
			"y": -630.4151706521003,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 76.69330113417651,
			"height": 62.39808628273761,
			"seed": 1743393566,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717152157587,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "_zwYxmNywDXv7ZXw2hDnx",
				"gap": 1.2157466049383174,
				"focus": 0.6277867940684987
			},
			"endBinding": {
				"elementId": "E69_HDq8njWzGrsPRn5OG",
				"gap": 15.83130945417357,
				"focus": -0.3299901433894164
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-76.69330113417651,
					62.39808628273761
				]
			]
		},
		{
			"type": "arrow",
			"version": 364,
			"versionNonce": 943146114,
			"isDeleted": false,
			"id": "SbbnYlup6f10zD2u9j32e",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 791.673378520233,
			"y": -666.9554187633275,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e3fafc",
			"width": 61.21265906922781,
			"height": 288.2454137403323,
			"seed": 851377246,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "YYcfqYWn91OojurDY-A3d",
				"focus": -0.9514123195132065,
				"gap": 4.851098706723178
			},
			"endBinding": {
				"elementId": "CaVkTGHpnnFHstkhdQlTs",
				"focus": -0.7715644354945937,
				"gap": 9.285715842519982
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-61.21265906922781,
					-288.2454137403323
				]
			]
		},
		{
			"type": "rectangle",
			"version": 2391,
			"versionNonce": 2100214942,
			"isDeleted": false,
			"id": "uDcEeE0hdwfwO8Mn42tkT",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1032.7447235459404,
			"y": 385.64178081038085,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 454.8229374414833,
			"height": 236.1853464246666,
			"seed": 78725022,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "2-O_5ZbcNq6FviTHG7pxw",
					"type": "arrow"
				},
				{
					"id": "tFeFpfHmdxZUuucKpJEiP",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "pqWwdvrG"
				},
				{
					"id": "FTiNMt1AasdfAXYUcovsq",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 3020,
			"versionNonce": 1067410498,
			"isDeleted": false,
			"id": "pqWwdvrG",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1037.7447235459404,
			"y": 407.73445402271415,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 444.53125,
			"height": 192,
			"seed": 837000158,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "当多个不同的版本release出现相同的bug时：\n1、在任意release分支拉出hotfix分支进行修复，修\n复并通过测试后合回对应release\n2、在其他需要修复的release中也拉出hotfix分支\n3、将为【1】中的hotfix对应的修复提交cherrypick\n到【2】拉出的hotfix分支中，测试通过后也合并回\n对应的release\n4、将最新的hotfix变更同步回对应的devlop分支",
			"rawText": "当多个不同的版本release出现相同的bug时：\n1、在任意release分支拉出hotfix分支进行修复，修复并通过测试后合回对应release\n2、在其他需要修复的release中也拉出hotfix分支\n3、将为【1】中的hotfix对应的修复提交cherrypick到【2】拉出的hotfix分支中，测试通过后也合并回对应的release\n4、将最新的hotfix变更同步回对应的devlop分支",
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "uDcEeE0hdwfwO8Mn42tkT",
			"originalText": "当多个不同的版本release出现相同的bug时：\n1、在任意release分支拉出hotfix分支进行修复，修复并通过测试后合回对应release\n2、在其他需要修复的release中也拉出hotfix分支\n3、将为【1】中的hotfix对应的修复提交cherrypick到【2】拉出的hotfix分支中，测试通过后也合并回对应的release\n4、将最新的hotfix变更同步回对应的devlop分支",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 983,
			"versionNonce": 396982494,
			"isDeleted": false,
			"id": "NZfJO84Q-yWa9TAKWFyb4",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1095.9051662153927,
			"y": -499.87986069031956,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 247.37205267999093,
			"height": 124.68837320007538,
			"seed": 1636456478,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "mCwa_L6YMHWBj9XGV9uky",
				"gap": 5.352666126521967,
				"focus": 0.1696231925484691
			},
			"endBinding": {
				"elementId": "zQaS1up97tTmtKxqk4xaE",
				"gap": 5.4625063192494885,
				"focus": 0.9003595247459042
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-247.37205267999093,
					124.68837320007538
				]
			]
		},
		{
			"type": "rectangle",
			"version": 2165,
			"versionNonce": 745376770,
			"isDeleted": false,
			"id": "mCwa_L6YMHWBj9XGV9uky",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1101.2578323419148,
			"y": -630.7392124343786,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 306.88399881386476,
			"height": 154,
			"seed": 1924799554,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "2-O_5ZbcNq6FviTHG7pxw",
					"type": "arrow"
				},
				{
					"id": "tFeFpfHmdxZUuucKpJEiP",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "ZJwcpfWr"
				},
				{
					"id": "NZfJO84Q-yWa9TAKWFyb4",
					"type": "arrow"
				},
				{
					"id": "9zzyEzD55s81IC4vq6U-v",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2390,
			"versionNonce": 1141026078,
			"isDeleted": false,
			"id": "ZJwcpfWr",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1106.7310817488471,
			"y": -601.7392124343786,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 295.9375,
			"height": 96,
			"seed": 460407810,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "需要发布企业版定制版时，从deve\nlop拉新的develop分支与releease\n分支作为发布分支，同时需要对\n应新的test分支",
			"rawText": "需要发布企业版定制版时，从develop拉新的develop分支与releease分支作为发布分支，同时需要对应新的test分支",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "mCwa_L6YMHWBj9XGV9uky",
			"originalText": "需要发布企业版定制版时，从develop拉新的develop分支与releease分支作为发布分支，同时需要对应新的test分支",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 276,
			"versionNonce": 1956690882,
			"isDeleted": false,
			"id": "bHp-kjsX6wlwcnzEMhyF3",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1387.4927424610669,
			"y": -220.54493672697896,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.3665924743922915,
			"height": 57.03372392006537,
			"seed": 651046018,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "jFDLcqqS",
				"focus": 0.03975852652979772,
				"gap": 6.9035814577474355
			},
			"endBinding": {
				"elementId": "npxSqkWlpfhF23jV7-u8f",
				"focus": 0.20783132727994308,
				"gap": 10.417232133545962
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.3665924743922915,
					57.03372392006537
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1038,
			"versionNonce": 799758686,
			"isDeleted": false,
			"id": "gyt1T5BmGMqi_0I0gtWJd",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1089.1544924671925,
			"y": 9.593754025214196,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 262331970,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "dwQsPydpdPsFOh4-XtXqM",
					"type": "arrow"
				},
				{
					"id": "_tTPEQyHKMvDOrmzsP95d",
					"type": "arrow"
				},
				{
					"id": "ziPo5ft_u9UjjHGinvdWL",
					"type": "arrow"
				},
				{
					"id": "9dcAqQBuYmkFu-X-CSdCR",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 493,
			"versionNonce": 1985475458,
			"isDeleted": false,
			"id": "dwQsPydpdPsFOh4-XtXqM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1099.167440093875,
			"y": -32.879944297162446,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.08217652505572914,
			"height": 33.78266784758261,
			"seed": 731998210,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "9gauCUet2RsCAhndCs10e",
				"focus": -0.19590785447635917,
				"gap": 2.8076562861032652
			},
			"endBinding": {
				"elementId": "gyt1T5BmGMqi_0I0gtWJd",
				"focus": 0.09091550107509169,
				"gap": 8.708973774853318
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.08217652505572914,
					33.78266784758261
				]
			]
		},
		{
			"type": "text",
			"version": 1416,
			"versionNonce": 838106526,
			"isDeleted": false,
			"id": "SLYc1V2n",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1166.8618026227591,
			"y": -9.729349027255779,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 71.83992004394531,
			"height": 25,
			"seed": 1063502670,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "N46_2vTLzCOEaCjxvJfVg",
					"type": "arrow"
				},
				{
					"id": "2yRWrsyuDNMECOODyMfKT",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "hotfix2",
			"rawText": "hotfix2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "hotfix2",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 347,
			"versionNonce": 1943155522,
			"isDeleted": false,
			"id": "264FCYvWUOfOKBLoIKtgv",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1099.4867094684619,
			"y": -92.78675200293178,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.5962516038794092,
			"height": 35.23361927658197,
			"seed": 601828382,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "6o4SCA8R",
				"focus": 0.2268923521029225,
				"gap": 2.8801483220862565
			},
			"endBinding": {
				"elementId": "9gauCUet2RsCAhndCs10e",
				"focus": 0.3204609101676669,
				"gap": 3.4872857675556066
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.5962516038794092,
					35.23361927658197
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1459,
			"versionNonce": 269425118,
			"isDeleted": false,
			"id": "XX1-p-wZ9ShifT7BBDFgT",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1188.7226348577697,
			"y": 68.67764036698307,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1469132226,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "Jw2CQm2JXU6lzCeHGxxbI",
					"type": "arrow"
				},
				{
					"id": "lRqgC3i8zi_5ANXyPCwtl",
					"type": "arrow"
				},
				{
					"id": "lnH2Bxx9aJy-oWEmQezDJ",
					"type": "arrow"
				},
				{
					"id": "d6G8qaH01KZ3LYTyi_2YS",
					"type": "arrow"
				},
				{
					"id": "ziPo5ft_u9UjjHGinvdWL",
					"type": "arrow"
				},
				{
					"id": "_tTPEQyHKMvDOrmzsP95d",
					"type": "arrow"
				},
				{
					"id": "_UPE9EuW953c_EAOaG0eR",
					"type": "arrow"
				},
				{
					"id": "V4Cuoruw16eQwCd_N9YqJ",
					"type": "arrow"
				},
				{
					"id": "7dQTG6vWCLALtBBPwrsIk",
					"type": "arrow"
				},
				{
					"id": "2yRWrsyuDNMECOODyMfKT",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 210,
			"versionNonce": 258898690,
			"isDeleted": false,
			"id": "7dQTG6vWCLALtBBPwrsIk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1198.7225228234572,
			"y": 91.39609831875444,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.9453571903068223,
			"height": 66.3736325987802,
			"seed": 719994654,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "XX1-p-wZ9ShifT7BBDFgT",
				"focus": -0.05553577450498265,
				"gap": 3.909944195269066
			},
			"endBinding": {
				"elementId": "vzWMDlNkVNqdJw9FMdskZ",
				"focus": 0.15287969490682018,
				"gap": 12.239175552355517
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.9453571903068223,
					66.3736325987802
				]
			]
		},
		{
			"type": "arrow",
			"version": 323,
			"versionNonce": 1091317278,
			"isDeleted": false,
			"id": "2yRWrsyuDNMECOODyMfKT",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1198.8841987674382,
			"y": 17.20215476416675,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 1.3046398535923345,
			"height": 50.08140181421511,
			"seed": 712985374,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "SLYc1V2n",
				"focus": 0.11790427858765155,
				"gap": 1.9315037914225286
			},
			"endBinding": {
				"elementId": "XX1-p-wZ9ShifT7BBDFgT",
				"focus": 0.2638988090052524,
				"gap": 1.6148888979110687
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.3046398535923345,
					50.08140181421511
				]
			]
		},
		{
			"type": "arrow",
			"version": 1424,
			"versionNonce": 1202440898,
			"isDeleted": false,
			"id": "FTiNMt1AasdfAXYUcovsq",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1230.4986156776667,
			"y": 382.18279136300964,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 28.160538317910778,
			"height": 165.48087977742028,
			"seed": 1097756162,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "uDcEeE0hdwfwO8Mn42tkT",
				"gap": 3.4589894473712093,
				"focus": -0.03615252106150745
			},
			"endBinding": {
				"elementId": "negJsExATClD44iOZ5EzJ",
				"gap": 3.6569422186652503,
				"focus": -0.16438428916992182
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-28.160538317910778,
					-165.48087977742028
				]
			]
		},
		{
			"type": "arrow",
			"version": 170,
			"versionNonce": 836549214,
			"isDeleted": false,
			"id": "yLw0G5h3k0hxMzVeBj-Jz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 845.24560169646,
			"y": -1307.3061721874105,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.784483679762161,
			"height": 42.889256800964404,
			"seed": 690787998,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "5fd5P8Qb",
				"focus": -0.02798033739920122,
				"gap": 2.282008856933089
			},
			"endBinding": {
				"elementId": "HjQTudAWcbvX56s-DmMh0",
				"focus": 0.14304449705845482,
				"gap": 4.027981334087297
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.784483679762161,
					42.889256800964404
				]
			]
		},
		{
			"type": "arrow",
			"version": 95,
			"versionNonce": 1932075650,
			"isDeleted": false,
			"id": "zwTRXh94NuLCpnD-z2J9Y",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 841.3012561799152,
			"y": -1236.7849083085478,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.16115721175026465,
			"height": 36.389834607758985,
			"seed": 1894616542,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "HjQTudAWcbvX56s-DmMh0",
				"focus": 0.39887015380287555,
				"gap": 5.287575216722434
			},
			"endBinding": {
				"elementId": "BHY8a9DRFIAVjjc7MlNtx",
				"focus": 0.052450963480873296,
				"gap": 3.626401610033735
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.16115721175026465,
					36.389834607758985
				]
			]
		},
		{
			"type": "ellipse",
			"version": 469,
			"versionNonce": 156352158,
			"isDeleted": false,
			"id": "BHY8a9DRFIAVjjc7MlNtx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 831.738461281064,
			"y": -1196.7758877875272,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e03131",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1610561666,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "yLw0G5h3k0hxMzVeBj-Jz",
					"type": "arrow"
				},
				{
					"id": "zwTRXh94NuLCpnD-z2J9Y",
					"type": "arrow"
				},
				{
					"id": "lRqgC3i8zi_5ANXyPCwtl",
					"type": "arrow"
				},
				{
					"id": "_6XvIeZt8zS43pfo8y5b5",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 933,
			"versionNonce": 1017479746,
			"isDeleted": false,
			"id": "dkCsIdsr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 322.56267578260156,
			"y": -471.8623976838088,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 58.63993835449219,
			"height": 25,
			"seed": 1819584914,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "nsY1715VMrSqP4zi_haBT",
					"type": "arrow"
				},
				{
					"id": "oiPiBhQTRYyK2_oDRG6i9",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "test2",
			"rawText": "test2",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "test2",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 2164,
			"versionNonce": 1813789406,
			"isDeleted": false,
			"id": "LG-SuWN8EjRTD65IVaYLu",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 345.1800066376122,
			"y": -374.3729805636683,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1947262046,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "ZemFeu4Xl-oCVMIB4QTL_",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2250,
			"versionNonce": 520088066,
			"isDeleted": false,
			"id": "OLT5_2FPwHlBh50a3oIHz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 346.9580220375001,
			"y": -267.85347563862274,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 124855874,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "vArEYUXMzeramwZbWlnMf",
					"type": "arrow"
				},
				{
					"id": "pqVdyqTB08AH9lJBKUnjq",
					"type": "arrow"
				},
				{
					"id": "rJ5LKxBVaq5UZYBCFA-nR",
					"type": "arrow"
				},
				{
					"id": "-xWV05qD0VhVEhnlrV0fa",
					"type": "arrow"
				},
				{
					"id": "k8OtUFQJL-fZtNBQxG2sB",
					"type": "arrow"
				},
				{
					"id": "UnGnUpMZqf8QUqN7zYJ7D",
					"type": "arrow"
				},
				{
					"id": "ZemFeu4Xl-oCVMIB4QTL_",
					"type": "arrow"
				},
				{
					"id": "UsmCAD5m4ZnrT_WlDIqk9",
					"type": "arrow"
				},
				{
					"id": "yZwOXdytHbGG_lFk15QX9",
					"type": "arrow"
				},
				{
					"id": "2qVnLdzsV2S6jaAq2B2lD",
					"type": "arrow"
				},
				{
					"id": "l9erLuoD9NInfQDKhgCtc",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 48,
			"versionNonce": 1087188766,
			"isDeleted": false,
			"id": "oiPiBhQTRYyK2_oDRG6i9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 350.2915347271529,
			"y": -440.1641698000326,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.15163782775317713,
			"height": 62.58738596887997,
			"seed": 978209246,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.06525815985152406,
				"gap": 6.698227883776212,
				"elementId": "dkCsIdsr"
			},
			"endBinding": {
				"focus": -0.3081290803281034,
				"gap": 7.902958799343281,
				"elementId": "LG-SuWN8EjRTD65IVaYLu"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.15163782775317713,
					62.58738596887997
				]
			]
		},
		{
			"type": "arrow",
			"version": 163,
			"versionNonce": 1631017410,
			"isDeleted": false,
			"id": "yZwOXdytHbGG_lFk15QX9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 354.7596935857316,
			"y": -354.5333095815696,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 3.3639144412017004,
			"height": 75.00238578160264,
			"seed": 1136599298,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.01936762522954647,
				"gap": 1.0161143906767087,
				"elementId": "LG-SuWN8EjRTD65IVaYLu"
			},
			"endBinding": {
				"focus": 0.30282016255615246,
				"gap": 11.76125193665699,
				"elementId": "OLT5_2FPwHlBh50a3oIHz"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					3.3639144412017004,
					75.00238578160264
				]
			]
		},
		{
			"type": "rectangle",
			"version": 2364,
			"versionNonce": 1943378782,
			"isDeleted": false,
			"id": "ezZNRr3laRT_RCS_Nh3KI",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -41.28468602651594,
			"y": 409.81936005686055,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 353.8008884370853,
			"height": 178,
			"seed": 443524190,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "2-O_5ZbcNq6FviTHG7pxw",
					"type": "arrow"
				},
				{
					"id": "tFeFpfHmdxZUuucKpJEiP",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "4bkNShCv"
				},
				{
					"id": "UKX4Jf9Cr4X16rJzjMgbR",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2881,
			"versionNonce": 308990338,
			"isDeleted": false,
			"id": "4bkNShCv",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -34.3842418079733,
			"y": 414.81936005686055,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 340,
			"height": 168,
			"seed": 1945594014,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "【并行测试】当需要并行测试时，拉出\n新的test分支进行测试工作，测试完成\n后将测试分支合并到一个主test分支，\n合并到主test后需要做简单的复测，复\n测时还是在feater改bug，改完合到主te\nst分支测试，测试完后正常合到develop\n等待发布",
			"rawText": "【并行测试】当需要并行测试时，拉出新的test分支进行测试工作，测试完成后将测试分支合并到一个主test分支，合并到主test后需要做简单的复测，复测时还是在feater改bug，改完合到主test分支测试，测试完后正常合到develop等待发布",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ezZNRr3laRT_RCS_Nh3KI",
			"originalText": "【并行测试】当需要并行测试时，拉出新的test分支进行测试工作，测试完成后将测试分支合并到一个主test分支，合并到主test后需要做简单的复测，复测时还是在feater改bug，改完合到主test分支测试，测试完后正常合到develop等待发布",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 389,
			"versionNonce": 998670238,
			"isDeleted": false,
			"id": "TRhVQAh0v9l3CQ-7Cs5X-",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 373.0380782987094,
			"y": -92.12777076213894,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 163.36615544807802,
			"height": 48.57364904701707,
			"seed": 327336670,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.023186838507831604,
				"gap": 9.27957762348503,
				"elementId": "_HVKBWf_t8Mw0mYgzKmzQ"
			},
			"endBinding": {
				"focus": -0.6657247782586428,
				"gap": 10.616882795858004,
				"elementId": "XL7FTkdmExZ-AVUZGMIts"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					163.36615544807802,
					48.57364904701707
				]
			]
		},
		{
			"type": "text",
			"version": 1540,
			"versionNonce": 98128194,
			"isDeleted": false,
			"id": "DgktlVQT",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -48.69685019779942,
			"y": -616.939169241381,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.015975952148438,
			"height": 20,
			"seed": 2141116958,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "HuSQh1fda3xyMkgGQ1IZo",
					"type": "arrow"
				},
				{
					"id": "y5nPt_8MzR_qd2sXK16B6",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "f6",
			"rawText": "f6",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f6",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 2439,
			"versionNonce": 1544608734,
			"isDeleted": false,
			"id": "oHQWfooWOQvkARmpmZA5c",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -48.9639976695407,
			"y": -511.0412170825639,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 941869406,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "YVC6nBNT1A9uSiPYYNoQz",
					"type": "arrow"
				},
				{
					"id": "xNDghdFcVxmdoFRyGqdZy",
					"type": "arrow"
				},
				{
					"id": "EWk4pnCLI2IlwDUPgbZDj",
					"type": "arrow"
				},
				{
					"id": "y5nPt_8MzR_qd2sXK16B6",
					"type": "arrow"
				},
				{
					"id": "DHrz8gBKwDJbig7BiqB9E",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2391,
			"versionNonce": 1323424002,
			"isDeleted": false,
			"id": "q7z8rVHNYjyMktBfojLoF",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -45.63095095874806,
			"y": -425.4444206165123,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 312552066,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "ZemFeu4Xl-oCVMIB4QTL_",
					"type": "arrow"
				},
				{
					"id": "YVC6nBNT1A9uSiPYYNoQz",
					"type": "arrow"
				},
				{
					"id": "qK2Fjhute0dAIX2W9wpUk",
					"type": "arrow"
				},
				{
					"id": "2qVnLdzsV2S6jaAq2B2lD",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 3936,
			"versionNonce": 1803923486,
			"isDeleted": false,
			"id": "YVC6nBNT1A9uSiPYYNoQz",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -41.930980252164716,
			"y": -486.9581390883211,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 1.4286173839812477,
			"height": 51.47907044049424,
			"seed": 39760670,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.28697537905671244,
				"gap": 5.431571116083184,
				"elementId": "oHQWfooWOQvkARmpmZA5c"
			},
			"endBinding": {
				"focus": -0.3899684536883952,
				"gap": 10.48102657369296,
				"elementId": "q7z8rVHNYjyMktBfojLoF"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.4286173839812477,
					51.47907044049424
				]
			]
		},
		{
			"type": "arrow",
			"version": 3012,
			"versionNonce": 1023633602,
			"isDeleted": false,
			"id": "y5nPt_8MzR_qd2sXK16B6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -40.09043499792453,
			"y": -591.4974721940009,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 1.8730989084860568,
			"height": 71.0311096057909,
			"seed": 1994229790,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "DgktlVQT",
				"focus": 0.0872302953645256,
				"gap": 5.441697047380103
			},
			"endBinding": {
				"elementId": "oHQWfooWOQvkARmpmZA5c",
				"focus": 0.20965540852666503,
				"gap": 9.481767158170651
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.8730989084860568,
					71.0311096057909
				]
			]
		},
		{
			"type": "arrow",
			"version": 1739,
			"versionNonce": 366345310,
			"isDeleted": false,
			"id": "qK2Fjhute0dAIX2W9wpUk",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -33.995246622341334,
			"y": -399.13395636078064,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 0.9790124125435611,
			"height": 143.93437376655265,
			"seed": 887910658,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.2393749431744154,
				"gap": 7.646656763537425,
				"elementId": "q7z8rVHNYjyMktBfojLoF"
			},
			"endBinding": {
				"focus": -0.20745721830039615,
				"gap": 3.079019744200714,
				"elementId": "Iwv_eePnGapvJ2m6ybtMt"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.9790124125435611,
					143.93437376655265
				]
			]
		},
		{
			"type": "ellipse",
			"version": 2531,
			"versionNonce": 1474101378,
			"isDeleted": false,
			"id": "Iwv_eePnGapvJ2m6ybtMt",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -40.2983787690807,
			"y": -254.63150728081644,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 600470146,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "LmJWSFm9bZrRiQMBK6mub",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 702,
			"versionNonce": 1624424606,
			"isDeleted": false,
			"id": "2qVnLdzsV2S6jaAq2B2lD",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -24.425570345616393,
			"y": -420.3582544168536,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 363.56246920631423,
			"height": 153.55292684056894,
			"seed": 1999003138,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.9175334663542963,
				"gap": 3.3650518797660247,
				"elementId": "q7z8rVHNYjyMktBfojLoF"
			},
			"endBinding": {
				"focus": 0.11146444213893311,
				"gap": 9.733321495932183,
				"elementId": "OLT5_2FPwHlBh50a3oIHz"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					363.56246920631423,
					153.55292684056894
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1933,
			"versionNonce": 1529716802,
			"isDeleted": false,
			"id": "vqJ1hr2J2uHh8TvQaOgxr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 351.99250514398295,
			"y": -184.6515940116409,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1135510082,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "UsmCAD5m4ZnrT_WlDIqk9",
					"type": "arrow"
				},
				{
					"id": "SmkQeAcrt49cD32ThhWG1",
					"type": "arrow"
				}
			],
			"updated": 1717151637234,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 251,
			"versionNonce": 1881996510,
			"isDeleted": false,
			"id": "l9erLuoD9NInfQDKhgCtc",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 359.8906943067044,
			"y": -243.8583850130513,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.23163615662281245,
			"height": 57.045027819598914,
			"seed": 1310058590,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637234,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.3918294076509015,
				"gap": 5.621729044978094,
				"elementId": "OLT5_2FPwHlBh50a3oIHz"
			},
			"endBinding": {
				"focus": -0.15263834472309987,
				"gap": 7.074502053106004,
				"elementId": "vqJ1hr2J2uHh8TvQaOgxr"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.23163615662281245,
					57.045027819598914
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1996,
			"versionNonce": 852772866,
			"isDeleted": false,
			"id": "_HVKBWf_t8Mw0mYgzKmzQ",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 348.5411200888898,
			"y": -113.50385432022847,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1717881666,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "pXVPz2XA8eRwjdJ8DCd0k",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 86,
			"versionNonce": 1232449822,
			"isDeleted": false,
			"id": "EhKN0UsZqNOWeWc0lTJ6q",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -17.105162956660507,
			"y": -244.19653984984046,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 357.55827578556693,
			"height": 150.40337196366738,
			"seed": 1788986398,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.4501844546480115,
				"gap": 4.641691899636614,
				"elementId": "Iwv_eePnGapvJ2m6ybtMt"
			},
			"endBinding": {
				"focus": -1.0215830271114723,
				"gap": 6.186976166400699,
				"elementId": "_HVKBWf_t8Mw0mYgzKmzQ"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					357.55827578556693,
					150.40337196366738
				]
			]
		},
		{
			"type": "arrow",
			"version": 51,
			"versionNonce": 1993340866,
			"isDeleted": false,
			"id": "SmkQeAcrt49cD32ThhWG1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 362.05371641818545,
			"y": -164.0809708065386,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.999417036620116,
			"height": 50.89344489832453,
			"seed": 1258871362,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.05939865636522553,
				"gap": 1.7699743786288966,
				"elementId": "vqJ1hr2J2uHh8TvQaOgxr"
			},
			"endBinding": {
				"focus": 0.578077184852237,
				"gap": 6.881656445685341,
				"elementId": "_HVKBWf_t8Mw0mYgzKmzQ"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.999417036620116,
					50.89344489832453
				]
			]
		},
		{
			"type": "ellipse",
			"version": 2660,
			"versionNonce": 404610398,
			"isDeleted": false,
			"id": "meTWS8CpeIefOc67CXI7_",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -41.068908240849254,
			"y": 2.6623684193695,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 839655774,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "RWix6X1rAqFbbg_yCZ0qP",
					"type": "arrow"
				},
				{
					"id": "LmJWSFm9bZrRiQMBK6mub",
					"type": "arrow"
				},
				{
					"id": "RxQBN5jmbxbGo6qGwg6r7",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2755,
			"versionNonce": 1732226946,
			"isDeleted": false,
			"id": "F5Jj36xE7P3oeuMNlz36T",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 101.58537373552613,
			"y": -81.6073462429523,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 29805698,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "A4_fX_PtY0svzaFlG6nG0",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 198,
			"versionNonce": 1903591838,
			"isDeleted": false,
			"id": "fcvF3LLxQWMozeT1nH-wV",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 342.55303995545825,
			"y": -96.05539662386875,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 211.20904780318034,
			"height": 24.572908638495832,
			"seed": 597482718,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.023109401804270784,
				"gap": 3.6669935841655263,
				"elementId": "_HVKBWf_t8Mw0mYgzKmzQ"
			},
			"endBinding": {
				"focus": 0.3263086107512481,
				"gap": 11.182471931501496,
				"elementId": "F5Jj36xE7P3oeuMNlz36T"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-211.20904780318034,
					24.572908638495832
				]
			]
		},
		{
			"type": "arrow",
			"version": 178,
			"versionNonce": 1751281474,
			"isDeleted": false,
			"id": "RWix6X1rAqFbbg_yCZ0qP",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 347.60671396407076,
			"y": -86.83143053670383,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 360.13971214539004,
			"height": 99.08199246544507,
			"seed": 1190103682,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.9189253144224532,
				"gap": 4.1741839494372055,
				"elementId": "_HVKBWf_t8Mw0mYgzKmzQ"
			},
			"endBinding": {
				"focus": 0.560562786404032,
				"gap": 9.948337025873544,
				"elementId": "meTWS8CpeIefOc67CXI7_"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-360.13971214539004,
					99.08199246544507
				]
			]
		},
		{
			"type": "arrow",
			"version": 199,
			"versionNonce": 414227934,
			"isDeleted": false,
			"id": "XiPEdO5csJRBAKM5bV_8j",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 104.70766665912744,
			"y": -260.90414630806515,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 2.074790351714668,
			"height": 175.96958915240538,
			"seed": 1431559618,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": 0.21179293877071062,
				"gap": 4.677195921509659,
				"elementId": "h-TiBTxid9PwY51JBqnqR"
			},
			"endBinding": {
				"focus": -0.3480757000289708,
				"gap": 7.196648083213054,
				"elementId": "F5Jj36xE7P3oeuMNlz36T"
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					2.074790351714668,
					175.96958915240538
				]
			]
		},
		{
			"type": "arrow",
			"version": 123,
			"versionNonce": 2123839234,
			"isDeleted": false,
			"id": "LmJWSFm9bZrRiQMBK6mub",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -29.776174414027345,
			"y": -234.87831525479896,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 1.960993960704478,
			"height": 231.18203819148707,
			"seed": 259591582,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "Iwv_eePnGapvJ2m6ybtMt",
				"focus": -0.1420841947497646,
				"gap": 1
			},
			"endBinding": {
				"elementId": "meTWS8CpeIefOc67CXI7_",
				"focus": -0.010352990754677209,
				"gap": 6.358690898023017
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-1.960993960704478,
					231.18203819148707
				]
			]
		},
		{
			"type": "ellipse",
			"version": 2829,
			"versionNonce": 1121792542,
			"isDeleted": false,
			"id": "L_1hQGF2LMp86TVQMDE5m",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 101.38666710309374,
			"y": 23.847959571654428,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1719057246,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "A4_fX_PtY0svzaFlG6nG0",
					"type": "arrow"
				},
				{
					"id": "GldRuVFhBaaK6iaGSkUOY",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2908,
			"versionNonce": 1247610562,
			"isDeleted": false,
			"id": "C_68tzQXoOi6e1s_7-xCn",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -40.27360058125939,
			"y": 93.67776429238813,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1904661442,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "kKMKqCPwcE0bUXHFxiB9P",
					"type": "arrow"
				},
				{
					"id": "c7kk52XgVXehI_Q9EVrfG",
					"type": "arrow"
				},
				{
					"id": "53iNpWPY8NAGanri2vG5c",
					"type": "arrow"
				},
				{
					"id": "vKKEa9oEYLGZT0IBp_Qep",
					"type": "arrow"
				},
				{
					"id": "hO-jzcIEZNZmXYedDJf8v",
					"type": "arrow"
				},
				{
					"id": "gzWytKwk_T37MZ5julPuh",
					"type": "arrow"
				},
				{
					"id": "7rKaEoEciLAY1f60Cmba-",
					"type": "arrow"
				},
				{
					"id": "mo7tVS1H7Tk0lzVv-uUVf",
					"type": "arrow"
				},
				{
					"id": "YVC6nBNT1A9uSiPYYNoQz",
					"type": "arrow"
				},
				{
					"id": "vArEYUXMzeramwZbWlnMf",
					"type": "arrow"
				},
				{
					"id": "xNDghdFcVxmdoFRyGqdZy",
					"type": "arrow"
				},
				{
					"id": "ZemFeu4Xl-oCVMIB4QTL_",
					"type": "arrow"
				},
				{
					"id": "qK2Fjhute0dAIX2W9wpUk",
					"type": "arrow"
				},
				{
					"id": "UsmCAD5m4ZnrT_WlDIqk9",
					"type": "arrow"
				},
				{
					"id": "EhKN0UsZqNOWeWc0lTJ6q",
					"type": "arrow"
				},
				{
					"id": "fcvF3LLxQWMozeT1nH-wV",
					"type": "arrow"
				},
				{
					"id": "XiPEdO5csJRBAKM5bV_8j",
					"type": "arrow"
				},
				{
					"id": "RxQBN5jmbxbGo6qGwg6r7",
					"type": "arrow"
				},
				{
					"id": "5Wvd47YdaPUGBR7lTe-ec",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 73,
			"versionNonce": 1525497438,
			"isDeleted": false,
			"id": "A4_fX_PtY0svzaFlG6nG0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 109.7130778778714,
			"y": -60.69213118199207,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 2.0522932216495064,
			"height": 79.62670353284264,
			"seed": 1792300546,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "F5Jj36xE7P3oeuMNlz36T",
				"focus": 0.09342279498481254,
				"gap": 2.147895708556158
			},
			"endBinding": {
				"elementId": "L_1hQGF2LMp86TVQMDE5m",
				"focus": -0.36454787008680156,
				"gap": 5.233379300608643
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-2.0522932216495064,
					79.62670353284264
				]
			]
		},
		{
			"type": "arrow",
			"version": 136,
			"versionNonce": 72539778,
			"isDeleted": false,
			"id": "RxQBN5jmbxbGo6qGwg6r7",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -31.84019788509677,
			"y": 23.78875685090307,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.567811603042017,
			"height": 57.22412899709832,
			"seed": 579288414,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "meTWS8CpeIefOc67CXI7_",
				"focus": 0.02902898689033668,
				"gap": 2.2990188311276576
			},
			"endBinding": {
				"elementId": "C_68tzQXoOi6e1s_7-xCn",
				"focus": -0.007949212217377835,
				"gap": 12.666843251487878
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.567811603042017,
					57.22412899709832
				]
			]
		},
		{
			"type": "arrow",
			"version": 226,
			"versionNonce": 1169277598,
			"isDeleted": false,
			"id": "5fqbpG5yICn4oZSK4yFls",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 557.9659431248385,
			"y": -33.89069130237213,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.6389042082805645,
			"height": 113.77248887077506,
			"seed": 1030437570,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "XL7FTkdmExZ-AVUZGMIts",
				"focus": -0.17238226924648284,
				"gap": 1
			},
			"endBinding": {
				"elementId": "QsIEUz1VbyV8hJocvWF3q",
				"focus": -0.07723287326376763,
				"gap": 4.693106981060906
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.6389042082805645,
					113.77248887077506
				]
			]
		},
		{
			"type": "rectangle",
			"version": 447,
			"versionNonce": 2033696322,
			"isDeleted": false,
			"id": "dQVkeRRCYdEk0xMLYJajx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 319.8558915280345,
			"y": 198.98275155518047,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"width": 91.4601402879209,
			"height": 64.4032613053671,
			"seed": 102030594,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "_9efvgrg4yGcpHWROun3Z",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1910,
			"versionNonce": 635158238,
			"isDeleted": false,
			"id": "QsIEUz1VbyV8hJocvWF3q",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 550.1075884127117,
			"y": 84.55198983441221,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1928403294,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "DUuEmxzkPRnkGXwcImfdl",
					"type": "arrow"
				},
				{
					"id": "GldRuVFhBaaK6iaGSkUOY",
					"type": "arrow"
				},
				{
					"id": "5fqbpG5yICn4oZSK4yFls",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2037,
			"versionNonce": 99264002,
			"isDeleted": false,
			"id": "lqAi5nchTJIgg-KFL0A_n",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 553.5551244289197,
			"y": 181.10404771964465,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 2018216834,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "TRhVQAh0v9l3CQ-7Cs5X-",
					"type": "arrow"
				},
				{
					"id": "rJ5LKxBVaq5UZYBCFA-nR",
					"type": "arrow"
				},
				{
					"id": "5fqbpG5yICn4oZSK4yFls",
					"type": "arrow"
				},
				{
					"id": "DUuEmxzkPRnkGXwcImfdl",
					"type": "arrow"
				},
				{
					"id": "5Wvd47YdaPUGBR7lTe-ec",
					"type": "arrow"
				},
				{
					"id": "mhxDM21GqLVPFXIaHrfAe",
					"type": "arrow"
				},
				{
					"id": "PapDiQqadOgIEatOlF0As",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 436,
			"versionNonce": 536621854,
			"isDeleted": false,
			"id": "DUuEmxzkPRnkGXwcImfdl",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 559.9845909568612,
			"y": 108.65151981927802,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 0.5916067627510984,
			"height": 67.23413163115522,
			"seed": 811217026,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "QsIEUz1VbyV8hJocvWF3q",
				"focus": -0.04879487531352548,
				"gap": 5.283724623381286
			},
			"endBinding": {
				"elementId": "lqAi5nchTJIgg-KFL0A_n",
				"focus": -0.23071079776434703,
				"gap": 5.39675868723298
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					0.5916067627510984,
					67.23413163115522
				]
			]
		},
		{
			"type": "arrow",
			"version": 198,
			"versionNonce": 325752258,
			"isDeleted": false,
			"id": "GldRuVFhBaaK6iaGSkUOY",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 121.66957420868926,
			"y": 32.76261549429499,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 421.4893928968688,
			"height": 57.78618788276803,
			"seed": 1917092702,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "L_1hQGF2LMp86TVQMDE5m",
				"focus": -0.210484991593306,
				"gap": 1.705640592470239
			},
			"endBinding": {
				"elementId": "QsIEUz1VbyV8hJocvWF3q",
				"focus": 0.12527623329598112,
				"gap": 7.2991239085184
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					421.4893928968688,
					57.78618788276803
				]
			]
		},
		{
			"type": "arrow",
			"version": 234,
			"versionNonce": 511975262,
			"isDeleted": false,
			"id": "5Wvd47YdaPUGBR7lTe-ec",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -20.62218633056716,
			"y": 101.95978479916792,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 568.3697372042249,
			"height": 81.59939503836497,
			"seed": 857209502,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "C_68tzQXoOi6e1s_7-xCn",
				"focus": -0.2747629390692023,
				"gap": 1.123324214714744
			},
			"endBinding": {
				"elementId": "lqAi5nchTJIgg-KFL0A_n",
				"focus": 0.5038482568938828,
				"gap": 7.3129185963848045
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					568.3697372042249,
					81.59939503836497
				]
			]
		},
		{
			"type": "arrow",
			"version": 76,
			"versionNonce": 316050818,
			"isDeleted": false,
			"id": "mhxDM21GqLVPFXIaHrfAe",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 572.7130579890239,
			"y": 196.87317592775298,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 138.7638659234749,
			"height": 195.44318872905785,
			"seed": 124855106,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "lqAi5nchTJIgg-KFL0A_n",
				"focus": -0.46746471624468766,
				"gap": 2.4049720676928423
			},
			"endBinding": {
				"elementId": "W83-g618AySMyZqeMQt8t",
				"focus": 0.056906118000140476,
				"gap": 7.293793529177108
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					138.7638659234749,
					195.44318872905785
				]
			]
		},
		{
			"type": "arrow",
			"version": 103,
			"versionNonce": 365200286,
			"isDeleted": false,
			"id": "VFk2HMuGGLXYnShyyDlVh",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 974.3777831750169,
			"y": 59.36340402195714,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 7.711746278808505,
			"height": 547.596538570083,
			"seed": 1357742146,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "vTI0zcR0tV5FOHIYEMZrI",
				"focus": -0.3125626424509119,
				"gap": 11.631870930978918
			},
			"endBinding": {
				"elementId": "65m71FrYDQmgRPBECUAx0",
				"focus": 0.014470036349412869,
				"gap": 8.264302261720735
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-7.711746278808505,
					547.596538570083
				]
			]
		},
		{
			"type": "ellipse",
			"version": 2121,
			"versionNonce": 2037222722,
			"isDeleted": false,
			"id": "65m71FrYDQmgRPBECUAx0",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 956.9884600022035,
			"y": 615.2200301248273,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 2076765534,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "9dcAqQBuYmkFu-X-CSdCR",
					"type": "arrow"
				},
				{
					"id": "f1esZIIxFsYqYbm4rnZfd",
					"type": "arrow"
				},
				{
					"id": "ziPo5ft_u9UjjHGinvdWL",
					"type": "arrow"
				},
				{
					"id": "VFk2HMuGGLXYnShyyDlVh",
					"type": "arrow"
				},
				{
					"id": "zULlobt91g-6DsXsI5Toi",
					"type": "arrow"
				},
				{
					"id": "Q78M6JqheVIVtRKq2tgQA",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 88,
			"versionNonce": 1206804446,
			"isDeleted": false,
			"id": "zULlobt91g-6DsXsI5Toi",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 732.4464877573664,
			"y": 412.2996724286627,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 223.2750476345907,
			"height": 204.3243648260767,
			"seed": 1506696450,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "W83-g618AySMyZqeMQt8t",
				"focus": -0.3680236323491492,
				"gap": 3.9207715780367973
			},
			"endBinding": {
				"elementId": "65m71FrYDQmgRPBECUAx0",
				"focus": -0.13044438460681398,
				"gap": 3.9174062145221775
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					223.2750476345907,
					204.3243648260767
				]
			]
		},
		{
			"type": "rectangle",
			"version": 803,
			"versionNonce": 1015977218,
			"isDeleted": false,
			"id": "ucL7cf5vyNXYPaPwMtAPf",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 775.826919308963,
			"y": 572.1431872618937,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 55.99239828999043,
			"height": 35.54894438449423,
			"seed": 1530761182,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "Q78M6JqheVIVtRKq2tgQA",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "hOatKQKL"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 744,
			"versionNonce": 152220702,
			"isDeleted": false,
			"id": "hOatKQKL",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 784.8391325530794,
			"y": 579.9176594541408,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 37.96797180175781,
			"height": 20,
			"seed": 1258021918,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"fontSize": 16,
			"fontFamily": 1,
			"text": "tag4",
			"rawText": "tag4",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ucL7cf5vyNXYPaPwMtAPf",
			"originalText": "tag4",
			"lineHeight": 1.25
		},
		{
			"type": "arrow",
			"version": 1112,
			"versionNonce": 1303946434,
			"isDeleted": false,
			"id": "Q78M6JqheVIVtRKq2tgQA",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 834.3309917271829,
			"y": 598.2689117833265,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 114.1152513669524,
			"height": 16.479398742828607,
			"seed": 275099742,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ucL7cf5vyNXYPaPwMtAPf",
				"gap": 2.5116741282294015,
				"focus": 0.18081040915622199
			},
			"endBinding": {
				"elementId": "65m71FrYDQmgRPBECUAx0",
				"gap": 11.070552312470577,
				"focus": 0.7687200785484485
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					114.1152513669524,
					16.479398742828607
				]
			]
		},
		{
			"type": "ellipse",
			"version": 2131,
			"versionNonce": 52592734,
			"isDeleted": false,
			"id": "cQtSb3Cbij0yY_HQwplnK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 353.4456458299828,
			"y": 231.06261671032803,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 91676930,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "2T98bAPdP7Qe8GHJp_iiH",
					"type": "arrow"
				},
				{
					"id": "I5l7KklKJgsTh8OXa1M9E",
					"type": "arrow"
				},
				{
					"id": "eovn8B_fdd3YHCdCxH-5W",
					"type": "arrow"
				},
				{
					"id": "hO-jzcIEZNZmXYedDJf8v",
					"type": "arrow"
				},
				{
					"id": "cdf0gDx3oR0WOtt3zSeLQ",
					"type": "arrow"
				},
				{
					"id": "fQpbFPjSfPaiN6VOGtY-V",
					"type": "arrow"
				},
				{
					"id": "2VpooVJGJ5oamr9f6pd7c",
					"type": "arrow"
				},
				{
					"id": "TNV4_4IhSXN5I1z789VhL",
					"type": "arrow"
				},
				{
					"id": "egsNM1cQmZXS2vLnnfffG",
					"type": "arrow"
				},
				{
					"id": "JGGBpnvIHxMNL_53clQGe",
					"type": "arrow"
				},
				{
					"id": "vArEYUXMzeramwZbWlnMf",
					"type": "arrow"
				},
				{
					"id": "mF2NsK5OAO_CmSmv6kkvB",
					"type": "arrow"
				},
				{
					"id": "rJ5LKxBVaq5UZYBCFA-nR",
					"type": "arrow"
				},
				{
					"id": "ZemFeu4Xl-oCVMIB4QTL_",
					"type": "arrow"
				},
				{
					"id": "TRhVQAh0v9l3CQ-7Cs5X-",
					"type": "arrow"
				},
				{
					"id": "2qVnLdzsV2S6jaAq2B2lD",
					"type": "arrow"
				},
				{
					"id": "l9erLuoD9NInfQDKhgCtc",
					"type": "arrow"
				},
				{
					"id": "UsmCAD5m4ZnrT_WlDIqk9",
					"type": "arrow"
				},
				{
					"id": "EhKN0UsZqNOWeWc0lTJ6q",
					"type": "arrow"
				},
				{
					"id": "SmkQeAcrt49cD32ThhWG1",
					"type": "arrow"
				},
				{
					"id": "fcvF3LLxQWMozeT1nH-wV",
					"type": "arrow"
				},
				{
					"id": "RWix6X1rAqFbbg_yCZ0qP",
					"type": "arrow"
				},
				{
					"id": "PapDiQqadOgIEatOlF0As",
					"type": "arrow"
				},
				{
					"id": "pXVPz2XA8eRwjdJ8DCd0k",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 192,
			"versionNonce": 378190978,
			"isDeleted": false,
			"id": "PapDiQqadOgIEatOlF0As",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 551.6008906860677,
			"y": 194.521773874289,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 168.12512771396848,
			"height": 39.74654559542782,
			"seed": 715720386,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "lqAi5nchTJIgg-KFL0A_n",
				"focus": -0.13733736616485645,
				"gap": 2.6323304811489656
			},
			"endBinding": {
				"elementId": "cQtSb3Cbij0yY_HQwplnK",
				"focus": -0.13508926894508352,
				"gap": 12.341368535741902
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-168.12512771396848,
					39.74654559542782
				]
			]
		},
		{
			"type": "arrow",
			"version": 174,
			"versionNonce": 2045691038,
			"isDeleted": false,
			"id": "pXVPz2XA8eRwjdJ8DCd0k",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 360.0219326826992,
			"y": -89.21097465068634,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"width": 4.872075978151543,
			"height": 311.2102609489451,
			"seed": 1579377374,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "_HVKBWf_t8Mw0mYgzKmzQ",
				"focus": -0.21020176661656903,
				"gap": 5.627697521407029
			},
			"endBinding": {
				"elementId": "cQtSb3Cbij0yY_HQwplnK",
				"focus": 0.26286810493564117,
				"gap": 9.190100598683271
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					4.872075978151543,
					311.2102609489451
				]
			]
		},
		{
			"type": "rectangle",
			"version": 2701,
			"versionNonce": 1958992962,
			"isDeleted": false,
			"id": "ODpk3BNh9YMyNzaOwWhDR",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 384.2609978468876,
			"y": 453.15948429422025,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 353.8008884370853,
			"height": 131.89482789020838,
			"seed": 2054595202,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"id": "P5eJr2mDzymkrWBNS87yi",
					"type": "arrow"
				},
				{
					"id": "2-O_5ZbcNq6FviTHG7pxw",
					"type": "arrow"
				},
				{
					"id": "tFeFpfHmdxZUuucKpJEiP",
					"type": "arrow"
				},
				{
					"type": "text",
					"id": "bP4LqYcP"
				},
				{
					"id": "_9efvgrg4yGcpHWROun3Z",
					"type": "arrow"
				}
			],
			"updated": 1717151637235,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 3474,
			"versionNonce": 254312670,
			"isDeleted": false,
			"id": "bP4LqYcP",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 391.16144206543026,
			"y": 471.10689823932444,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 340,
			"height": 96,
			"seed": 2118320706,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "如果并行的测试分支为临时分支则使用\n后直接删除，不需要这一代码的操作，\n如果为固定的测试分支，则需要在复测\n通过后同步测试分支的代码",
			"rawText": "如果并行的测试分支为临时分支则使用后直接删除，不需要这一代码的操作，如果为固定的测试分支，则需要在复测通过后同步测试分支的代码",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ODpk3BNh9YMyNzaOwWhDR",
			"originalText": "如果并行的测试分支为临时分支则使用后直接删除，不需要这一代码的操作，如果为固定的测试分支，则需要在复测通过后同步测试分支的代码",
			"lineHeight": 1.2
		},
		{
			"type": "arrow",
			"version": 605,
			"versionNonce": 910361602,
			"isDeleted": false,
			"id": "UKX4Jf9Cr4X16rJzjMgbR",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 175.26132071452474,
			"y": 401.18089716149404,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"width": 80.59939712719876,
			"height": 92.84068108819633,
			"seed": 635828226,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ezZNRr3laRT_RCS_Nh3KI",
				"focus": -0.17751821199029882,
				"gap": 8.638462895366501
			},
			"endBinding": {
				"elementId": "OhWBVLkHqRP8HYoL3igO7",
				"focus": -0.2873978731854664,
				"gap": 1.5317806232744715
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					80.59939712719876,
					-92.84068108819633
				]
			]
		},
		{
			"type": "arrow",
			"version": 902,
			"versionNonce": 107001118,
			"isDeleted": false,
			"id": "_9efvgrg4yGcpHWROun3Z",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 501.36212657510544,
			"y": 444.5693944350128,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"width": 111.37187514282317,
			"height": 179.47055927068925,
			"seed": 1898700702,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "ODpk3BNh9YMyNzaOwWhDR",
				"gap": 8.590089859207438,
				"focus": -0.062173455067211995
			},
			"endBinding": {
				"elementId": "dQVkeRRCYdEk0xMLYJajx",
				"gap": 1.7128223037759653,
				"focus": -0.05110716798718901
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-111.37187514282317,
					-179.47055927068925
				]
			]
		},
		{
			"type": "arrow",
			"version": 82,
			"versionNonce": 352793538,
			"isDeleted": false,
			"id": "DHrz8gBKwDJbig7BiqB9E",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 705.4861803305201,
			"y": -556.5232565795786,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"width": 725.9761099449712,
			"height": 56.31816910784471,
			"seed": 1437315806,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "yZI_DtfhVAXIPqZuzvBJB",
				"focus": -0.41718325080646784,
				"gap": 1
			},
			"endBinding": {
				"elementId": "oHQWfooWOQvkARmpmZA5c",
				"focus": 0.3082447974754885,
				"gap": 9.937731440156254
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-725.9761099449712,
					56.31816910784471
				]
			]
		},
		{
			"id": "9zzyEzD55s81IC4vq6U-v",
			"type": "arrow",
			"x": 1296.4262995358306,
			"y": -469.91890813816076,
			"width": 74.76980525995418,
			"height": 204.05706184463907,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1915973342,
			"version": 538,
			"versionNonce": 858745730,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					74.76980525995418,
					204.05706184463907
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "mCwa_L6YMHWBj9XGV9uky",
				"gap": 6.8203042962178415,
				"focus": -0.06122602994562386
			},
			"endBinding": {
				"elementId": "jFDLcqqS",
				"gap": 13.413328108795298,
				"focus": -0.15746015961478577
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 741,
			"versionNonce": 504888414,
			"isDeleted": false,
			"id": "ZFH6uf1cDyE4sWEjQ4Jks",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1011.2167747653098,
			"y": -1065.4075112579396,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 317.8651155988588,
			"height": 178,
			"seed": 1890755586,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [
				{
					"type": "text",
					"id": "JjwI3M4U"
				},
				{
					"id": "HuSQh1fda3xyMkgGQ1IZo",
					"type": "arrow"
				}
			],
			"updated": 1717152568316,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1632,
			"versionNonce": 282378398,
			"isDeleted": false,
			"id": "JjwI3M4U",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1018.6258950647392,
			"y": -1048.4075112579396,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 303.046875,
			"height": 144,
			"seed": 1558892510,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717152568316,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "【向右合并】所有的向右合并需要\n先向左合并，在左边分支解决完冲\n突后再向右合并，如果是release或\ndevelop的向左合并出现冲突，解决\n冲突后需要将冲突范围通知到QA并\n做简单的回归测试后再向右合并",
			"rawText": "【向右合并】所有的向右合并需要先向左合并，在左边分支解决完冲突后再向右合并，如果是release或develop的向左合并出现冲突，解决冲突后需要将冲突范围通知到QA并做简单的回归测试后再向右合并",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ZFH6uf1cDyE4sWEjQ4Jks",
			"originalText": "【向右合并】所有的向右合并需要先向左合并，在左边分支解决完冲突后再向右合并，如果是release或develop的向左合并出现冲突，解决冲突后需要将冲突范围通知到QA并做简单的回归测试后再向右合并",
			"lineHeight": 1.2
		},
		{
			"id": "fLhdDLMV",
			"type": "text",
			"x": 1384.0416765583705,
			"y": 88.09274379410198,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1379853534,
			"version": 3,
			"versionNonce": 620868254,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717151637232,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "IEfK0rRvKF3O7lJwWHsft",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "ynubrqZG",
			"type": "text",
			"x": 1053.1642108639064,
			"y": -496.1652717024725,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 374815746,
			"version": 3,
			"versionNonce": 151544158,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "DCzkuuCG-vG595ZqiGPNx",
			"type": "arrow",
			"x": 818.0848156154507,
			"y": -896.1557209251343,
			"width": 430.22208656364774,
			"height": 487.48600558010367,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 463591326,
			"version": 87,
			"versionNonce": 1785759134,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-430.22208656364774,
					487.48600558010367
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "hcS-Qj3dbfjSNH-Ck10V7",
				"focus": 0.024841040824064586,
				"gap": 7.621681169571957
			},
			"endBinding": {
				"elementId": "ouqqdH4MPBGYe7HQSG7ff",
				"focus": -0.40792051046455285,
				"gap": 6.38870382025641
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "Ob86tqmHY1acBUTXJtQou",
			"type": "arrow",
			"x": 843.1103431482268,
			"y": -891.4262548016518,
			"width": 266.8327143608615,
			"height": 805.2271877976984,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1389120450,
			"version": 97,
			"versionNonce": 385526594,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717151637235,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-266.8327143608615,
					805.2271877976984
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "hcS-Qj3dbfjSNH-Ck10V7",
				"focus": 0.11361171141578627,
				"gap": 12.35114729305451
			},
			"endBinding": {
				"elementId": "t0zIdseNikxIfBu9gCcPw",
				"focus": 0.28002347422670504,
				"gap": 1.3868596245002323
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "lJFDf0UQ",
			"type": "text",
			"x": 561.0739150372146,
			"y": -737.5826254688554,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 511074206,
			"version": 4,
			"versionNonce": 909514690,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717151628907,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "VN_dAZrUgt78f6zUFRXcq",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "IoXBZUSg",
			"type": "text",
			"x": 619.9440629606987,
			"y": -765.8815665541965,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 952401374,
			"version": 2,
			"versionNonce": 364062402,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717151636205,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "",
			"lineHeight": 1.2
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "#fff9db",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 0.5,
		"currentItemStrokeStyle": "dashed",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 4,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 874.7247379318646,
		"scrollY": 1750.4327340509003,
		"zoom": {
			"value": 0.7906299145229991
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		}
	},
	"files": {}
}
```
%%