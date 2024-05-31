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

如果当前featuer有需要提交测试的内容，但是被提测节点阻塞时，且后续的开发需要基于当前的feature内容，需要在当前feature上拉新的分支开发，以避免影响提测 ^JjwI3M4U

直接在hotfix测试，测试通过后合并到发布分支，并同步代码到develop分支，hotfix为临时分支，使用过后务必删除 ^VlGYHEX0

同时合并，一起提交测试 ^KdHq0UN6

需要发布企业版定制版时，从develop拉新的release分支作为发布分支，同时需要对应新的develop和test分支 ^ZJwcpfWr

如果并行的测试分支为临时分支则使用后直接删除，不需要这一代码的操作，如果为固定的测试分支，则需要在复测通过后同步测试分支的代码 ^bP4LqYcP

当多个不同的版本release出现相同的bug时：
1、在任意release分支拉出hotfix分支进行修复，修复并通过测试后合回对应release
2、在其他需要修复的release中也拉出hotfix分支
3、将为【1】中的hotfix对应的修复提交cherrypick到【2】拉出的hotfix分支中，测试通过后也合并回对应的release
4、将最新的release变更合并回对应的devlop分支 ^pqWwdvrG

test ^MQ9BISi1

回滚代码使用revert，避免使用reset ^8PqLoKpV

f5 ^KlCzGXfa

tag1 ^YXWQEZhB

【并行测试】当需要并行测试时，拉出新的test分支进行测试工作，测试完成后将测试分支合并到一个主test分支，合并到主test后需要做简单的复测，复测时还是在feater改bug，改完合到主test分支测试，测试完后正常合到develop等待发布 ^4bkNShCv

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.1.3",
	"elements": [
		{
			"id": "OhWBVLkHqRP8HYoL3igO7",
			"type": "rectangle",
			"x": 257.39249846499797,
			"y": -500.58803720941415,
			"width": 384.71882587876166,
			"height": 810.7969961274982,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 57427138,
			"version": 1221,
			"versionNonce": 1286039390,
			"isDeleted": false,
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
			"updated": 1717149798855,
			"link": null,
			"locked": false
		},
		{
			"id": "ouqqdH4MPBGYe7HQSG7ff",
			"type": "rectangle",
			"x": 328.45078633954665,
			"y": -412.008959397953,
			"width": 53.02323889199991,
			"height": 178.60034145257006,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1293078274,
			"version": 1115,
			"versionNonce": 809421726,
			"isDeleted": false,
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
			"updated": 1717149798855,
			"link": null,
			"locked": false
		},
		{
			"id": "negJsExATClD44iOZ5EzJ",
			"type": "rectangle",
			"x": 1047.8491662353977,
			"y": -139.93655181626923,
			"width": 204.22007189137528,
			"height": 352.9815211831933,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 99668126,
			"version": 634,
			"versionNonce": 854697218,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "FTiNMt1AasdfAXYUcovsq",
					"type": "arrow"
				}
			],
			"updated": 1717150051544,
			"link": null,
			"locked": false
		},
		{
			"id": "t0zIdseNikxIfBu9gCcPw",
			"type": "rectangle",
			"x": 529.8543922055514,
			"y": -84.81220737945313,
			"width": 46.65716914132522,
			"height": 75.92512425503905,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1059001410,
			"version": 943,
			"versionNonce": 1094044930,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798855,
			"link": null,
			"locked": false
		},
		{
			"id": "QakXxObGF8USAiqvDE9lN",
			"type": "arrow",
			"x": 709.6408236181353,
			"y": -964.099592264726,
			"width": 259.31577446992526,
			"height": 51.235541554257225,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 997971678,
			"version": 338,
			"versionNonce": 1872428062,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798855,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-259.31577446992526,
					51.235541554257225
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "POvdbMr5IajHocviriZRo",
			"type": "rectangle",
			"x": 541.369677199604,
			"y": -994.4267254326007,
			"width": 44.23917782801152,
			"height": 270.3267754914075,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1369418974,
			"version": 590,
			"versionNonce": 683203778,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "Cu0LOV14I3RoeuYuOkv1s",
			"type": "rectangle",
			"x": 542.610556447377,
			"y": -1208.6190221307868,
			"width": 40.00727071518087,
			"height": 110.47119142502265,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 934652290,
			"version": 226,
			"versionNonce": 23185502,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "f2rtc5rP_7_pLzZ7D0P_a",
					"type": "arrow"
				}
			],
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 325,
			"versionNonce": 17108126,
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
			"updated": 1717149798856,
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
			"version": 392,
			"versionNonce": 1192629314,
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
			"boundElements": null,
			"updated": 1717149798856,
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
			"version": 562,
			"versionNonce": 622802690,
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
			"updated": 1717149933688,
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
			"version": 580,
			"versionNonce": 1905146882,
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
			"boundElements": null,
			"updated": 1717149798856,
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
			"version": 232,
			"versionNonce": 1652882718,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 585,
			"versionNonce": 841706434,
			"isDeleted": false,
			"id": "GPghsHKL_8iszHP-TJ-il",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1080.562897142952,
			"y": -1409.833425717314,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 100.52998549706331,
			"height": 12.737623772591633,
			"seed": 1557976258,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "mcb18y2IbBUrGYRkV6EAV",
				"focus": 0.3353710831055354,
				"gap": 3.956483999195143
			},
			"endBinding": {
				"elementId": "CAc3v7rYwYLYrdgxyriIw",
				"focus": 0.4283929439763202,
				"gap": 5.034392340095916
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
					-100.52998549706331,
					12.737623772591633
				]
			]
		},
		{
			"type": "rectangle",
			"version": 477,
			"versionNonce": 1768139102,
			"isDeleted": false,
			"id": "mcb18y2IbBUrGYRkV6EAV",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1084.519381142147,
			"y": -1424.506547885602,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 410,
			"versionNonce": 252486530,
			"isDeleted": false,
			"id": "NUcFb5Iv",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1100.7555857803063,
			"y": -1416.732075693355,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 23.519989013671875,
			"height": 20,
			"seed": 1285295170,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717149798856,
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
			"version": 337,
			"versionNonce": 807587230,
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
			"updated": 1717149798856,
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
			"version": 320,
			"versionNonce": 1920000834,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "c7kk52XgVXehI_Q9EVrfG",
			"type": "arrow",
			"x": 705.8769268782123,
			"y": -1345.1572452946084,
			"width": 250.87279126489193,
			"height": 41.701621264486675,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2031673602,
			"version": 524,
			"versionNonce": 1408461278,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-250.87279126489193,
					41.701621264486675
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "QCOWxQzG",
			"type": "text",
			"x": 202.23081282051328,
			"y": -1415.1514437580263,
			"width": 12.111984252929688,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1507467550,
			"version": 362,
			"versionNonce": 2145862750,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "4OD-AaThKlsKnXvWmR15I",
					"type": "arrow"
				}
			],
			"updated": 1717149944194,
			"link": null,
			"locked": false,
			"text": "f1",
			"rawText": "f1",
			"fontSize": 16,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f1",
			"lineHeight": 1.25
		},
		{
			"id": "K8xkmHkN",
			"type": "text",
			"x": 353.01816157133953,
			"y": -1416.5124357551072,
			"width": 19.167984008789062,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 892885470,
			"version": 304,
			"versionNonce": 137815070,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "y2XcU-aFumBGtdStw5_PF",
					"type": "arrow"
				}
			],
			"updated": 1717149941592,
			"link": null,
			"locked": false,
			"text": "f2",
			"rawText": "f2",
			"fontSize": 16,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f2",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 597,
			"versionNonce": 1693256286,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 713,
			"versionNonce": 1946538626,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "53iNpWPY8NAGanri2vG5c",
			"type": "arrow",
			"x": 707.0044999741115,
			"y": -1338.3817306270946,
			"width": 327.7300778636036,
			"height": 85.10395485519643,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1489467330,
			"version": 93,
			"versionNonce": 366481054,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-327.7300778636036,
					85.10395485519643
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 817,
			"versionNonce": 1584149058,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 721,
			"versionNonce": 861440734,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 820,
			"versionNonce": 879794690,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 896,
			"versionNonce": 2080341790,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "jUzrAMkF",
			"type": "text",
			"x": 429.17776012025604,
			"y": -1409.5324892194485,
			"width": 18.671981811523438,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1209624222,
			"version": 392,
			"versionNonce": 484317058,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "-tDxLSbWPqcw9utBEfMzq",
					"type": "arrow"
				}
			],
			"updated": 1717149939313,
			"link": null,
			"locked": false,
			"text": "f3",
			"rawText": "f3",
			"fontSize": 16,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f3",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 816,
			"versionNonce": 195906626,
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
			"updated": 1717149911872,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 944,
			"versionNonce": 661619074,
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
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "2T98bAPdP7Qe8GHJp_iiH",
			"type": "arrow",
			"x": 707.5768460816994,
			"y": -1344.3843642378613,
			"width": 487.5298558468813,
			"height": 48.34023436776761,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 748932958,
			"version": 328,
			"versionNonce": 1974213442,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149911873,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-487.5298558468813,
					48.34023436776761
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "3mJsMLZPqMueHxYWso8Ir",
			"type": "arrow",
			"x": 440.82912385864586,
			"y": -1289.7144017661594,
			"width": 0.118408203125,
			"height": 26.335052490234375,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 772604638,
			"version": 226,
			"versionNonce": 983903198,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.118408203125,
					26.335052490234375
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "LSY4vJHml18JO1Fc-7ayH",
			"type": "arrow",
			"x": 444.1164663002687,
			"y": -1236.7942753148022,
			"width": 0.46764070115159484,
			"height": 24.03718313684749,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 11107202,
			"version": 162,
			"versionNonce": 242911490,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.46764070115159484,
					24.03718313684749
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "fp_TK7S8VgxBb7RWdZF6X",
			"type": "arrow",
			"x": 364.66738069458336,
			"y": -1241.0532994712376,
			"width": 0.222381591796875,
			"height": 19.6690673828125,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 183092190,
			"version": 213,
			"versionNonce": 319815710,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.222381591796875,
					19.6690673828125
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "vKKEa9oEYLGZT0IBp_Qep",
			"type": "arrow",
			"x": 366.5062173293697,
			"y": -1197.3002491223583,
			"width": 0.6069907974213606,
			"height": 24.974830728765482,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1876881602,
			"version": 162,
			"versionNonce": 1711675586,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.6069907974213606,
					24.974830728765482
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "I5l7KklKJgsTh8OXa1M9E",
			"type": "arrow",
			"x": 205.7832935731024,
			"y": -1278.7361015418287,
			"width": 2.7523938204675176,
			"height": 179.16126253095263,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1042309086,
			"version": 512,
			"versionNonce": 877962178,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149911873,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					2.7523938204675176,
					179.16126253095263
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 907,
			"versionNonce": 755609730,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "eovn8B_fdd3YHCdCxH-5W",
			"type": "arrow",
			"x": 451.65722749105373,
			"y": -1194.8409559576999,
			"width": 95.15130273057491,
			"height": 16.014023561152953,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2077409502,
			"version": 337,
			"versionNonce": 1174999198,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					95.15130273057491,
					16.014023561152953
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "hO-jzcIEZNZmXYedDJf8v",
			"type": "arrow",
			"x": 376.1743835367547,
			"y": -1155.1649912300795,
			"width": 176.0416858175131,
			"height": 33.42686981996121,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 729706498,
			"version": 135,
			"versionNonce": 1195659330,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					176.0416858175131,
					33.42686981996121
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "ejN6J0FiJThN2JyuktjWC",
			"type": "arrow",
			"x": 442.98796600809237,
			"y": -1187.3784007529787,
			"width": 1.0709097952362754,
			"height": 61.53930415081413,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 52011742,
			"version": 415,
			"versionNonce": 2048478430,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.0709097952362754,
					61.53930415081413
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 953,
			"versionNonce": 1217722370,
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
					"id": "1yNrqrp9p8w5JBv8Aom4x",
					"type": "arrow"
				},
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "gzWytKwk_T37MZ5julPuh",
			"type": "arrow",
			"x": 366.7363504215458,
			"y": -1149.0842138001776,
			"width": 0.7924572384573594,
			"height": 34.83938565939229,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1128521502,
			"version": 145,
			"versionNonce": 1901592862,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.7924572384573594,
					34.83938565939229
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 968,
			"versionNonce": 1895475138,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "cdf0gDx3oR0WOtt3zSeLQ",
			"type": "arrow",
			"x": 564.3753305573642,
			"y": -1106.3053388807425,
			"width": 1.2781079627458212,
			"height": 35.02737523882092,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1344844062,
			"version": 654,
			"versionNonce": 792079710,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-1.2781079627458212,
					35.02737523882092
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1133,
			"versionNonce": 680812418,
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
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "fQpbFPjSfPaiN6VOGtY-V",
			"type": "arrow",
			"x": 454.55767107292826,
			"y": -1107.9104968771376,
			"width": 98.8735877523473,
			"height": 43.414882147941626,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1424293214,
			"version": 527,
			"versionNonce": 553963934,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					98.8735877523473,
					43.414882147941626
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.3036337873420608,
				"gap": 1.9799905359892414,
				"elementId": "E3COVTUB6U1I2ql_PHvqh"
			},
			"endBinding": {
				"focus": 0.07518411054608153,
				"gap": 1,
				"elementId": "D-GowF4lgLmayZz3ZWQu1"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "7rKaEoEciLAY1f60Cmba-",
			"type": "arrow",
			"x": 370.8701048012057,
			"y": -1093.2707343671007,
			"width": 180.2623415381879,
			"height": 76.51496895748755,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1201517342,
			"version": 683,
			"versionNonce": 2074156866,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					180.2623415381879,
					76.51496895748755
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1152,
			"versionNonce": 1643441630,
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"id": "2VpooVJGJ5oamr9f6pd7c",
			"type": "arrow",
			"x": 566.2603359324672,
			"y": -1048.1824185792013,
			"width": 0.862841278282076,
			"height": 23.835530409658986,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 376430814,
			"version": 1020,
			"versionNonce": 377480962,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.862841278282076,
					23.835530409658986
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -0.44123812432099846,
				"gap": 2.6998525833012774,
				"elementId": "D-GowF4lgLmayZz3ZWQu1"
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 419,
			"versionNonce": 2132247070,
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
				}
			],
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"id": "TNV4_4IhSXN5I1z789VhL",
			"type": "arrow",
			"x": 581.4371597535235,
			"y": -1009.207619525159,
			"width": 126.28330647624693,
			"height": 35.60045434773667,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1669354242,
			"version": 264,
			"versionNonce": 995987038,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					126.28330647624693,
					35.60045434773667
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 838,
			"versionNonce": 1115164382,
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
					"id": "wFpb6OrqPpeBM8bL0tM_G",
					"type": "arrow"
				},
				{
					"id": "TNV4_4IhSXN5I1z789VhL",
					"type": "arrow"
				},
				{
					"id": "ewX-PUIUVzPCheu5zzZN4",
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 615,
			"versionNonce": 76448542,
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 553,
			"versionNonce": 870663618,
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
			"boundElements": null,
			"updated": 1717149798857,
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
			"id": "c5IStCvElDHnc5G24AYsS",
			"type": "arrow",
			"x": 1103.8627419895715,
			"y": -677.7880811615642,
			"width": 123.21021861688507,
			"height": 125.70123205836262,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
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
			"seed": 703986142,
			"version": 727,
			"versionNonce": 1548513118,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-123.21021861688507,
					125.70123205836262
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.18047860460713872,
				"gap": 2.5136665843187984,
				"elementId": "eKn38A3iwd0ER4jZW7XZy"
			},
			"endBinding": {
				"focus": 0.2023706399782977,
				"gap": 5.639792795546475,
				"elementId": "EO8sNgeWUrsXn_FTcEMAX"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "xYuJGTaLBSQnv1McFD121",
			"type": "arrow",
			"x": 972.9704897918946,
			"y": -529.4536896641845,
			"width": 2.263683138036413,
			"height": 171.59860496531905,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1847790082,
			"version": 1101,
			"versionNonce": 813383042,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					2.263683138036413,
					171.59860496531905
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 990,
			"versionNonce": 1740779266,
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
			"updated": 1717149835987,
			"link": null,
			"locked": false
		},
		{
			"id": "VUUSfYE3M-MvAOwSXRJnp",
			"type": "arrow",
			"x": 719.0687603648723,
			"y": -955.3814065965506,
			"width": 6.688277948481527,
			"height": 380.6211832147359,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1202447646,
			"version": 794,
			"versionNonce": 1556563202,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-6.688277948481527,
					380.6211832147359
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1172,
			"versionNonce": 704447518,
			"isDeleted": false,
			"id": "ZYCmPlipi5sLgkbAUFpm1",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 965.9230397194589,
			"y": -348.63763933274356,
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1007,
			"versionNonce": 1130058946,
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"id": "YEcab3CGW62Tyq9nav7A8",
			"type": "arrow",
			"x": 712.7862101875564,
			"y": -548.0316493594805,
			"width": 2.426919572164934,
			"height": 49.71346306543472,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1508779458,
			"version": 901,
			"versionNonce": 843239518,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					2.426919572164934,
					49.71346306543472
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "Tn5Lg213YQllimKqkAbHw",
			"type": "arrow",
			"x": 729.1873673870438,
			"y": -474.57758941456154,
			"width": 230.41176821384727,
			"height": 122.88160282090399,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 156463710,
			"version": 1244,
			"versionNonce": 8721566,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					230.41176821384727,
					122.88160282090399
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 924,
			"versionNonce": 91917378,
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 864,
			"versionNonce": 242536670,
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
			"boundElements": null,
			"updated": 1717149798857,
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
			"id": "2-O_5ZbcNq6FviTHG7pxw",
			"type": "arrow",
			"x": 1098.8639040452151,
			"y": -412.6920510364257,
			"width": 103.65456746874747,
			"height": 71.59586458519857,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
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
			"seed": 2126590082,
			"version": 1498,
			"versionNonce": 1554232322,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-103.65456746874747,
					71.59586458519857
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.34854917658697254,
				"gap": 1,
				"elementId": "jyOM9KXBptKiB1Xf_SLbP"
			},
			"endBinding": {
				"focus": 1.0475861422580321,
				"gap": 10.784395519985758,
				"elementId": "ZYCmPlipi5sLgkbAUFpm1"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "y2XcU-aFumBGtdStw5_PF",
			"type": "arrow",
			"x": 364.6352993094545,
			"y": -1390.6142284930002,
			"width": 1.0498301779369967,
			"height": 115.98426625002435,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 150669470,
			"version": 376,
			"versionNonce": 1103557790,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149941592,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-1.0498301779369967,
					115.98426625002435
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "-tDxLSbWPqcw9utBEfMzq",
			"type": "arrow",
			"x": 441.8980935729927,
			"y": -1383.2225799927792,
			"width": 1.486093622689964,
			"height": 61.494034067447046,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1640931458,
			"version": 375,
			"versionNonce": 1572577026,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149939314,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-1.486093622689964,
					61.494034067447046
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "nsY1715VMrSqP4zi_haBT",
			"type": "arrow",
			"x": 560.4134568880789,
			"y": -1426.2156372769566,
			"width": 0.5560031747060066,
			"height": 232.10934803653322,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 877982622,
			"version": 414,
			"versionNonce": 1031844190,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.5560031747060066,
					232.10934803653322
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "N46_2vTLzCOEaCjxvJfVg",
			"type": "arrow",
			"x": 723.0070798975737,
			"y": -1434.86096027721,
			"width": 2.7844434797656277,
			"height": 68.55679974533928,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 782249730,
			"version": 89,
			"versionNonce": 1562647426,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-2.7844434797656277,
					68.55679974533928
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "xN92JemNHK0W0SsV8Pe0H",
			"type": "arrow",
			"x": 970.3909052979463,
			"y": -1436.3727026952265,
			"width": 4.104697471393251,
			"height": 344.9011226985069,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1021088606,
			"version": 352,
			"versionNonce": 190764446,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-4.104697471393251,
					344.9011226985069
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "85Q61Q16f8IEjNi2UQ524",
			"type": "arrow",
			"x": 729.4723154155051,
			"y": -560.0174045765337,
			"width": 229.9737439514049,
			"height": 9.750929283072423,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1427511710,
			"version": 585,
			"versionNonce": 2128173890,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					229.9737439514049,
					9.750929283072423
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "text",
			"version": 631,
			"versionNonce": 2054058462,
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
			"updated": 1717149798857,
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
			"id": "Jw2CQm2JXU6lzCeHGxxbI",
			"type": "arrow",
			"x": 958.206096315571,
			"y": -1390.1599093827867,
			"width": 98.05514923009423,
			"height": 142.66813504097945,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 746480478,
			"version": 527,
			"versionNonce": 2135991042,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-98.05514923009423,
					142.66813504097945
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 458,
			"versionNonce": 1225323202,
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 319,
			"versionNonce": 1581650526,
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"id": "VR-FI2fn4Pi51WwjJNg8r",
			"type": "arrow",
			"x": 969.1147717840208,
			"y": -1385.7804034800158,
			"width": 4.575501420209093,
			"height": 289.09001573954424,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 128359618,
			"version": 115,
			"versionNonce": 513886850,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-4.575501420209093,
					289.09001573954424
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "pJxB5U8HqEXZhcriN7Cwz",
			"type": "arrow",
			"x": 965.5514674880234,
			"y": -1063.7233220296662,
			"width": 6.275315555546058,
			"height": 504.48209713244364,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1495688862,
			"version": 358,
			"versionNonce": 248518302,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					6.275315555546058,
					504.48209713244364
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "_6XvIeZt8zS43pfo8y5b5",
			"type": "arrow",
			"x": 856.9244805772125,
			"y": -1178.3264335220852,
			"width": 93.26814643522368,
			"height": 89.13803027582162,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1128386242,
			"version": 131,
			"versionNonce": 383298114,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					93.26814643522368,
					89.13803027582162
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "arrow",
			"version": 591,
			"versionNonce": 1611633374,
			"isDeleted": false,
			"id": "P5eJr2mDzymkrWBNS87yi",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1071.2927731227096,
			"y": -1343.3511793858706,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 87.84301823137287,
			"height": 43.594176636130214,
			"seed": 789519838,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"startBinding": {
				"focus": -0.5862545951518257,
				"gap": 5.903268431446918,
				"elementId": "xj0K3RVw89xD2DMv1Q0FO"
			},
			"endBinding": {
				"focus": 0.3532932197515185,
				"gap": 12.181481417542454,
				"elementId": "CAc3v7rYwYLYrdgxyriIw"
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
					-87.84301823137287,
					-43.594176636130214
				]
			]
		},
		{
			"type": "rectangle",
			"version": 487,
			"versionNonce": 411963906,
			"isDeleted": false,
			"id": "xj0K3RVw89xD2DMv1Q0FO",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1077.1960415541564,
			"y": -1363.4283995337612,
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 428,
			"versionNonce": 211126046,
			"isDeleted": false,
			"id": "DfiEJ1LM",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1087.4837320833708,
			"y": -1354.2652689627114,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 51.27996826171875,
			"height": 20,
			"seed": 530966622,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717149798857,
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
			"version": 755,
			"versionNonce": 1455456706,
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
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 700,
			"versionNonce": 1423111006,
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
			"boundElements": null,
			"updated": 1717149798858,
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
			"id": "v9ZYK2uUQxS9MuqDdInPg",
			"type": "arrow",
			"x": 1092.9022363694046,
			"y": -1115.3750167974163,
			"width": 110.93083171354715,
			"height": 33.75442433826743,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
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
			"seed": 1827355906,
			"version": 742,
			"versionNonce": 1284438402,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-110.93083171354715,
					33.75442433826743
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 590,
			"versionNonce": 960002370,
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
					"id": "Ork_B98wIt_EPd1h1iGMx",
					"type": "arrow"
				},
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
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"id": "uxKC_0IAp83Qp6MdaqHj1",
			"type": "arrow",
			"x": 721.6994704024314,
			"y": -1334.4247952524834,
			"width": 3.274599397383554,
			"height": 177.09450100647064,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 811893954,
			"version": 166,
			"versionNonce": 1872245726,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-3.274599397383554,
					177.09450100647064
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "lRqgC3i8zi_5ANXyPCwtl",
			"type": "arrow",
			"x": 825.8991845932348,
			"y": -1182.0198063012213,
			"width": 89.12835778614124,
			"height": 38.03296088691536,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 106181854,
			"version": 243,
			"versionNonce": 471597314,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-89.12835778614124,
					38.03296088691536
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "U0tTix8nW1WOxBu6mc6G8",
			"type": "arrow",
			"x": 719.458552731787,
			"y": -1123.799844711853,
			"width": 0.6332640281461863,
			"height": 136.2488754417309,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 528890882,
			"version": 124,
			"versionNonce": 1147275294,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.6332640281461863,
					136.2488754417309
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 1259,
			"versionNonce": 817402050,
			"isDeleted": false,
			"id": "2lkEj6JJozgS3zB8JRUYf",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1201.4772263140446,
			"y": -1300.601075151359,
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
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1377,
			"versionNonce": 1097290846,
			"isDeleted": false,
			"id": "VlGYHEX0",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1207.893124085545,
			"y": -1295.601075151359,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 221.71875,
			"height": 120,
			"seed": 2054997598,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717149798858,
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
			"id": "lnH2Bxx9aJy-oWEmQezDJ",
			"type": "arrow",
			"x": 1196.412559803713,
			"y": -1224.9716880218753,
			"width": 314.1292736401175,
			"height": 89.77575834216259,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
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
			"seed": 1914919262,
			"version": 1845,
			"versionNonce": 1789732994,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-314.1292736401175,
					-89.77575834216259
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "egsNM1cQmZXS2vLnnfffG",
			"type": "arrow",
			"x": 566.3242203756865,
			"y": -1001.8863409287814,
			"width": 0.3946507298053348,
			"height": 37.23125014074151,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1211410910,
			"version": 597,
			"versionNonce": 1081677982,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.3946507298053348,
					37.23125014074151
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1375,
			"versionNonce": 1907935298,
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
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"id": "JGGBpnvIHxMNL_53clQGe",
			"type": "arrow",
			"x": 218.60999518348603,
			"y": -1084.0905265165409,
			"width": 335.5910962324954,
			"height": 122.67496423987541,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 493962306,
			"version": 473,
			"versionNonce": 961041630,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					335.5910962324954,
					122.67496423987541
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "A0cdj6By",
			"type": "text",
			"x": 280.47398614123466,
			"y": -1127.809509184279,
			"width": 18.015975952148438,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1162641858,
			"version": 744,
			"versionNonce": 1924210626,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"text": "f4",
			"rawText": "f4",
			"fontSize": 16,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f4",
			"lineHeight": 1.25
		},
		{
			"id": "mo7tVS1H7Tk0lzVv-uUVf",
			"type": "arrow",
			"x": 350.8376113671413,
			"y": -1152.7656034928368,
			"width": 66.84151275792163,
			"height": 130.4824385704943,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1586504734,
			"version": 313,
			"versionNonce": 608384350,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-66.84151275792163,
					130.4824385704943
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1090,
			"versionNonce": 2133907870,
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
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"id": "S-u3CW9VzZbucjU7w8ojs",
			"type": "arrow",
			"x": 282.1563468534929,
			"y": -990.4734575314362,
			"width": 0.1020022652373882,
			"height": 35.120482026612535,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 382361630,
			"version": 329,
			"versionNonce": 761263582,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.1020022652373882,
					35.120482026612535
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1314,
			"versionNonce": 1361665794,
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
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1573,
			"versionNonce": 937527838,
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
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"id": "5BMA3xeS4QN3eWdeYI2Zi",
			"type": "arrow",
			"x": 281.4946737509498,
			"y": -926.7567434950231,
			"width": 3.1011007836011686,
			"height": 83.42570866476103,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1466936542,
			"version": 780,
			"versionNonce": 1483353794,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					3.1011007836011686,
					83.42570866476103
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1557,
			"versionNonce": 1571198558,
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
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"id": "vArEYUXMzeramwZbWlnMf",
			"type": "arrow",
			"x": 297.5729909822761,
			"y": -937.6797684057055,
			"width": 241.99374226156783,
			"height": 194.26671012311976,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 229346206,
			"version": 1112,
			"versionNonce": 645596802,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					241.99374226156783,
					194.26671012311976
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "mF2NsK5OAO_CmSmv6kkvB",
			"type": "arrow",
			"x": 563.0595830114892,
			"y": -938.8310089974666,
			"width": 0.5814041315197755,
			"height": 73.70188654322533,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1300171614,
			"version": 758,
			"versionNonce": 1468013214,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.5814041315197755,
					73.70188654322533
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 915,
			"versionNonce": 1034141122,
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
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"id": "l3PhCwCd23xB8fu5A4r38",
			"type": "arrow",
			"x": 562.401988901171,
			"y": -1173.0392213143828,
			"width": 1.2745925487794239,
			"height": 37.651854837382416,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 249077762,
			"version": 333,
			"versionNonce": 768702302,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.2745925487794239,
					37.651854837382416
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "hcS-Qj3dbfjSNH-Ck10V7",
			"type": "rectangle",
			"x": 806.9919499213022,
			"y": -1009.7774020947063,
			"width": 134.8608232097468,
			"height": 78.66141993754627,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1340586718,
			"version": 1404,
			"versionNonce": 1806349698,
			"isDeleted": false,
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
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"id": "KdHq0UN6",
			"type": "text",
			"x": 814.4223615261756,
			"y": -994.4466921259332,
			"width": 120,
			"height": 48,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 522759966,
			"version": 1313,
			"versionNonce": 27712414,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"text": "同时合并，一\n起提交测试",
			"rawText": "同时合并，一起提交测试",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "hcS-Qj3dbfjSNH-Ck10V7",
			"originalText": "同时合并，一起提交测试",
			"lineHeight": 1.2
		},
		{
			"id": "f2rtc5rP_7_pLzZ7D0P_a",
			"type": "arrow",
			"x": 805.9919499213022,
			"y": -980.1358662003629,
			"width": 221.0144669567369,
			"height": 164.69910238240686,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1478674334,
			"version": 2227,
			"versionNonce": 1971107138,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-221.0144669567369,
					-164.69910238240686
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -0.44624763163730313,
				"gap": 1,
				"elementId": "hcS-Qj3dbfjSNH-Ck10V7"
			},
			"endBinding": {
				"focus": -0.11571600165646623,
				"gap": 2.359655802007353,
				"elementId": "Cu0LOV14I3RoeuYuOkv1s"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1348,
			"versionNonce": 505269442,
			"isDeleted": false,
			"id": "npxSqkWlpfhF23jV7-u8f",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1367.4472696198159,
			"y": -153.1761893907875,
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
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 645,
			"versionNonce": 2059358750,
			"isDeleted": false,
			"id": "jFDLcqqS",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1321.2365864627475,
			"y": -251.58866016717232,
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
				}
			],
			"updated": 1717150058129,
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
			"version": 1217,
			"versionNonce": 177461470,
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
				}
			],
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "bjE3I10Y9qhv0Tojb_OAM",
			"type": "arrow",
			"x": 718.2112632067469,
			"y": -465.7265702234522,
			"width": 102.93108507899865,
			"height": 78.87803626599987,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1862565854,
			"version": 627,
			"versionNonce": 2077830146,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					102.93108507899865,
					78.87803626599987
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "text",
			"version": 531,
			"versionNonce": 715197726,
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
			"updated": 1717149798859,
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
			"id": "nvQWrfEG4ib3CdgroMwdn",
			"type": "arrow",
			"x": 833.7327925305144,
			"y": -484.61883585389023,
			"width": 0.5138838852838035,
			"height": 93.25044453483315,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 913497630,
			"version": 192,
			"versionNonce": 1937619294,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.5138838852838035,
					93.25044453483315
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "3LWmsUhf8uKnL5lJScBMp",
			"type": "arrow",
			"x": 834.5534748928874,
			"y": -362.61353671207564,
			"width": 2.6139072479948027,
			"height": 92.26573070894875,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1246269470,
			"version": 378,
			"versionNonce": 1465619330,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-2.6139072479948027,
					92.26573070894875
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "zQaS1up97tTmtKxqk4xaE",
				"focus": -0.11235275183100883,
				"gap": 5.281796793290839
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1332,
			"versionNonce": 209378718,
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
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "BUnYET1yOraQVnBy8zBLN",
			"type": "arrow",
			"x": 846.6729214624465,
			"y": -259.82394160665706,
			"width": 509.6657928240918,
			"height": 111.55469798692013,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 247283330,
			"version": 210,
			"versionNonce": 862049090,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					509.6657928240918,
					111.55469798692013
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 972,
			"versionNonce": 2134536094,
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
			"updated": 1717150143996,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 922,
			"versionNonce": 1673972702,
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
			"boundElements": null,
			"updated": 1717150143996,
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
			"id": "5lTyLBSg5_MTHHlETSTuN",
			"type": "arrow",
			"x": 1471.8420091396242,
			"y": -181.9329443926821,
			"width": 75.09456866218443,
			"height": 27.241534467882815,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
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
			"seed": 1956777374,
			"version": 1232,
			"versionNonce": 1020259422,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150143996,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-75.09456866218443,
					27.241534467882815
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "AxnaVf403JPmSR84fqToW",
			"type": "arrow",
			"x": 971.9266938125509,
			"y": -325.6968432962475,
			"width": 6.012170514413356,
			"height": 127.30021377924493,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 277153922,
			"version": 800,
			"versionNonce": 1607690946,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-6.012170514413356,
					127.30021377924493
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1506,
			"versionNonce": 1233066590,
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
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "d6G8qaH01KZ3LYTyi_2YS",
			"type": "arrow",
			"x": 987.2122643912661,
			"y": -78.75483648573314,
			"width": 93.80797859487313,
			"height": 24.4212849379458,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 777283358,
			"version": 995,
			"versionNonce": 1700577922,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					93.80797859487313,
					24.4212849379458
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 919,
			"versionNonce": 1034428062,
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
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "IEfK0rRvKF3O7lJwWHsft",
			"type": "arrow",
			"x": 1377.0835948055183,
			"y": -133.35438669320396,
			"width": 13.88601505619954,
			"height": 463.7881656674451,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 489621186,
			"version": 562,
			"versionNonce": 2001206110,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					13.88601505619954,
					463.7881656674451
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -0.00572712607976307,
				"gap": 1,
				"elementId": "npxSqkWlpfhF23jV7-u8f"
			},
			"endBinding": {
				"focus": 0.6250138285162246,
				"gap": 3.422609292007275,
				"elementId": "bsESozbWHN71nTFYtE4-a"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "text",
			"version": 909,
			"versionNonce": 2110681474,
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
			"updated": 1717149798859,
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
			"version": 1729,
			"versionNonce": 63500610,
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
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "JbEM3rRHJCBkirdGQDdtX",
			"type": "arrow",
			"x": 968.1241172270209,
			"y": -164.2177655924014,
			"width": 0.3832013764606472,
			"height": 70.72422928664126,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1484873758,
			"version": 346,
			"versionNonce": 778779614,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.3832013764606472,
					70.72422928664126
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 2046,
			"versionNonce": 769489154,
			"isDeleted": false,
			"id": "vTI0zcR0tV5FOHIYEMZrI",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 967.1823989238994,
			"y": 60.74480904282507,
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
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "f1esZIIxFsYqYbm4rnZfd",
			"type": "arrow",
			"x": 973.5039440254773,
			"y": -71.37413861465618,
			"width": 0.09726306672632745,
			"height": 127.84280788432923,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1033574850,
			"version": 565,
			"versionNonce": 1133776926,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.09726306672632745,
					127.84280788432923
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -0.23551949487776486,
				"gap": 1.004497367257322,
				"elementId": "9ZnAC9T-R_wsrYmRumPE7"
			},
			"endBinding": {
				"focus": -0.23487086730019593,
				"gap": 7.173384390504214,
				"elementId": "vTI0zcR0tV5FOHIYEMZrI"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "ziPo5ft_u9UjjHGinvdWL",
			"type": "arrow",
			"x": 1095.8334118391672,
			"y": 32.0854375982978,
			"width": 359.1400711646638,
			"height": 198.74019125113927,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 29509982,
			"version": 1698,
			"versionNonce": 2072709314,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-359.1400711646638,
					198.74019125113927
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -1.0852144642743131,
				"gap": 3.927716436619244,
				"elementId": "gyt1T5BmGMqi_0I0gtWJd"
			},
			"endBinding": {
				"focus": 1.1516596433532789,
				"gap": 7.583309240654669,
				"elementId": "qm7ken_hLnb4T9vaxYHR_"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "_tTPEQyHKMvDOrmzsP95d",
			"type": "arrow",
			"x": 1105.6780619114575,
			"y": 30.901794621110596,
			"width": 85.10566969773845,
			"height": 129.13058971749734,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dotted",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1241946974,
			"version": 1532,
			"versionNonce": 488135774,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "EB5ErEnf"
				}
			],
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					85.10566969773845,
					129.13058971749734
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "EB5ErEnf",
			"type": "text",
			"x": 1111.393293057898,
			"y": 44.664495693817685,
			"width": 87.5,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 644894018,
			"version": 25,
			"versionNonce": 611360898,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"text": "cherrypick",
			"rawText": "cherrypick",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "_tTPEQyHKMvDOrmzsP95d",
			"originalText": "cherrypick",
			"lineHeight": 1.2
		},
		{
			"type": "ellipse",
			"version": 2148,
			"versionNonce": 281616542,
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
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "P1LUp-vweN14fbTvT-GOH",
			"type": "arrow",
			"x": 832.7915162038094,
			"y": -248.98323955530432,
			"width": 5.767041677141265,
			"height": 584.7910545882511,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1561594014,
			"version": 641,
			"versionNonce": 340607042,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					5.767041677141265,
					584.7910545882511
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1689,
			"versionNonce": 307715294,
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
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "zsyLfTfDCCiKwNkGoAwjQ",
			"type": "arrow",
			"x": 1183.7567392637993,
			"y": 186.64305715618093,
			"width": 330.99853352825085,
			"height": 170.28751901697126,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1888630046,
			"version": 1158,
			"versionNonce": 1728047106,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-330.99853352825085,
					170.28751901697126
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "c4J_TNIiVi_ingM8yDvWN",
			"type": "arrow",
			"x": 285.9711570405361,
			"y": -1100.1578624046474,
			"width": 1.7679261294013031,
			"height": 77.81036978300062,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 350380318,
			"version": 161,
			"versionNonce": 2001998110,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.7679261294013031,
					77.81036978300062
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "4OD-AaThKlsKnXvWmR15I",
			"type": "arrow",
			"x": 206.4643300755879,
			"y": -1392.6388586267553,
			"width": 0.7150312709320588,
			"height": 79.49695348212367,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 626067394,
			"version": 576,
			"versionNonce": 1821131998,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149944195,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.7150312709320588,
					79.49695348212367
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1397,
			"versionNonce": 993017182,
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
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "_UPE9EuW953c_EAOaG0eR",
			"type": "arrow",
			"x": 1365.0879464562306,
			"y": -136.70327560593137,
			"width": 153.08240681420534,
			"height": 210.8599077324232,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1823815554,
			"version": 1178,
			"versionNonce": 2097368962,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-153.08240681420534,
					210.8599077324232
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "V4Cuoruw16eQwCd_N9YqJ",
			"type": "arrow",
			"x": 1209.4736895952847,
			"y": 185.91651408138392,
			"width": 166.46529366991263,
			"height": 151.21859265951292,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 248414174,
			"version": 936,
			"versionNonce": 1152520002,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					166.46529366991263,
					151.21859265951292
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 1114,
			"versionNonce": 81532510,
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
			"updated": 1717150142314,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1072,
			"versionNonce": 2080742046,
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
			"boundElements": null,
			"updated": 1717150142314,
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
			"id": "LAgLHP6B5WIRPXj2JRuOu",
			"type": "arrow",
			"x": 1499.6494723426774,
			"y": 290.0948404084662,
			"width": 102.26134477346227,
			"height": 38.02660302329747,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
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
			"seed": 1900363842,
			"version": 1630,
			"versionNonce": 87690014,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150142314,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-102.26134477346227,
					38.02660302329747
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.19322516148119107,
				"gap": 2.5136665843187984,
				"elementId": "_HeXXRN81d-mHkOzRk2n2"
			},
			"endBinding": {
				"focus": -0.34197860412853714,
				"gap": 6.1555773237315705,
				"elementId": "bsESozbWHN71nTFYtE4-a"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "wwKLfg2eikXduMWW1DaBP",
			"type": "arrow",
			"x": 711.2939825074983,
			"y": -463.2870139846314,
			"width": 0.22909159883977281,
			"height": 145.22790259114998,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2088240450,
			"version": 1068,
			"versionNonce": 835690078,
			"isDeleted": false,
			"boundElements": [
				{
					"type": "text",
					"id": "axzmWKaG"
				}
			],
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.22909159883977281,
					145.22790259114998
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "axzmWKaG",
			"type": "text",
			"x": 683.8972251089708,
			"y": -478.54094568520014,
			"width": 52.34375,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1203935006,
			"version": 19,
			"versionNonce": 1262911106,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"text": "revert",
			"rawText": "revert",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "wwKLfg2eikXduMWW1DaBP",
			"originalText": "revert",
			"lineHeight": 1.2
		},
		{
			"type": "ellipse",
			"version": 1307,
			"versionNonce": 1363681950,
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
				}
			],
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "tFeFpfHmdxZUuucKpJEiP",
			"type": "arrow",
			"x": 1095.809130325433,
			"y": -341.0019163146651,
			"width": 388.2397136461017,
			"height": 48.10869943012767,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
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
			"seed": 214241602,
			"version": 1176,
			"versionNonce": 799416030,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-388.2397136461017,
					48.10869943012767
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.5154092415504088,
				"gap": 12.884619738275887,
				"elementId": "q70ygEeLzOAXUfAc0qMEm"
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "KlCzGXfa",
			"type": "text",
			"x": 89.36071709029855,
			"y": -810.917918957204,
			"width": 17.663970947265625,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1608673438,
			"version": 1498,
			"versionNonce": 477513218,
			"isDeleted": false,
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
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"text": "f5",
			"rawText": "f5",
			"fontSize": 16,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f5",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 1845,
			"versionNonce": 1098552094,
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
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "c5BOxzDSKj8IGWYmVa49x",
			"type": "arrow",
			"x": 91.5103236577081,
			"y": -673.5804576970712,
			"width": 3.232162889063389,
			"height": 109.9550883515576,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 918247710,
			"version": 2842,
			"versionNonce": 394409410,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					3.232162889063389,
					109.9550883515576
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 2327,
			"versionNonce": 1094090590,
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
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2272,
			"versionNonce": 1928998274,
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
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "fhoOlMdIIunbyRq09IOYY",
			"type": "arrow",
			"x": 93.64968949386122,
			"y": -535.1894944039987,
			"width": 1.3023967956575149,
			"height": 67.98734368435635,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1895253470,
			"version": 3119,
			"versionNonce": 1932190622,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.3023967956575149,
					67.98734368435635
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "h6uKponbVpUlMKewnPSF-",
			"type": "arrow",
			"x": 94.70220653857584,
			"y": -783.2662721775724,
			"width": 1.8944729382637888,
			"height": 77.80167133482632,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 739170846,
			"version": 2153,
			"versionNonce": 1411198274,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.8944729382637888,
					77.80167133482632
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "xNDghdFcVxmdoFRyGqdZy",
			"type": "arrow",
			"x": 703.6961977090548,
			"y": -557.9282240306715,
			"width": 591.7929377109285,
			"height": 8.909060929878251,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2142272094,
			"version": 1998,
			"versionNonce": 1770569694,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-591.7929377109285,
					8.909060929878251
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "rJ5LKxBVaq5UZYBCFA-nR",
			"type": "arrow",
			"x": 556.220122426002,
			"y": -565.2485567566564,
			"width": 0.7155782442994223,
			"height": 511.93201707997343,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1644772958,
			"version": 1252,
			"versionNonce": 956318914,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.7155782442994223,
					511.93201707997343
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "ZemFeu4Xl-oCVMIB4QTL_",
			"type": "arrow",
			"x": 113.27020892047553,
			"y": -451.036660688339,
			"width": 227.33120263222673,
			"height": 84.33914453410881,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1317532254,
			"version": 1655,
			"versionNonce": 2011061378,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					227.33120263222673,
					84.33914453410881
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "C-E4aP2ATOfgK1N_GqXDu",
			"type": "arrow",
			"x": 711.5346583930536,
			"y": -284.0163675369074,
			"width": 7.22054732945162,
			"height": 491.8724368540042,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1392497282,
			"version": 826,
			"versionNonce": 1092953246,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					7.22054732945162,
					491.8724368540042
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 2028,
			"versionNonce": 715357250,
			"isDeleted": false,
			"id": "q70ygEeLzOAXUfAc0qMEm",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1108.693750063709,
			"y": -367.37524756980815,
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
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2030,
			"versionNonce": 1620238558,
			"isDeleted": false,
			"id": "8PqLoKpV",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1113.8544997026386,
			"y": -352.80268029885326,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 192.34375,
			"height": 48,
			"seed": 825322818,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717149798860,
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
			"version": 1613,
			"versionNonce": 1328456706,
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
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "UsW5ojpr_WUW1Nj-TqfLU",
			"type": "rectangle",
			"x": -183.14000283228296,
			"y": -1220.5147939908936,
			"width": 254.72481688886467,
			"height": 130,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ced4da",
			"fillStyle": "hachure",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 16289118,
			"version": 524,
			"versionNonce": 564710594,
			"isDeleted": false,
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
			"updated": 1717150115328,
			"link": null,
			"locked": false
		},
		{
			"id": "E3o0BjG4",
			"type": "text",
			"x": -178.04321938785063,
			"y": -1215.5147939908936,
			"width": 244.53125,
			"height": 120,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 7817118,
			"version": 720,
			"versionNonce": 358857986,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150115328,
			"link": null,
			"locked": false,
			"text": "【建议】当feater分支已合\n并到test并通过测试，合到d\nevelop后，推荐删除，新业\n务的开发从develop拉出新分\n支开发",
			"rawText": "【建议】当feater分支已合并到test并通过测试，合到develop后，推荐删除，新业务的开发从develop拉出新分支开发",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "UsW5ojpr_WUW1Nj-TqfLU",
			"originalText": "【建议】当feater分支已合并到test并通过测试，合到develop后，推荐删除，新业务的开发从develop拉出新分支开发",
			"lineHeight": 1.2
		},
		{
			"id": "FOo7N305vZiNikONA4Qjn",
			"type": "arrow",
			"x": 76.04771772413935,
			"y": -1102.6495565565028,
			"width": 109.40396933873379,
			"height": 7.678838216905888,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
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
			"seed": 1335013826,
			"version": 849,
			"versionNonce": 121908226,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150116941,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					109.40396933873379,
					7.678838216905888
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "MkiVn8NVjOyXjrXFlAuKZ",
			"type": "arrow",
			"x": 269.42253771632573,
			"y": -937.2215679526371,
			"width": 164.05234899753813,
			"height": 247.6782424566038,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2461022,
			"version": 364,
			"versionNonce": 484676354,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-164.05234899753813,
					247.6782424566038
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1389,
			"versionNonce": 576726686,
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
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "4IiI4Q5e",
			"type": "text",
			"x": 427.33067505922105,
			"y": -973.0518543839719,
			"width": 17.663970947265625,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 604214942,
			"version": 984,
			"versionNonce": 1343330882,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "o7WIzY222B3DLP8rEgQGI",
					"type": "arrow"
				}
			],
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"text": "f5",
			"rawText": "f5",
			"fontSize": 16,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f5",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 1666,
			"versionNonce": 656253662,
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
					"id": "LyiaUY_PY_cjV977PpKH6",
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
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "pqVdyqTB08AH9lJBKUnjq",
			"type": "arrow",
			"x": 563.0184138270885,
			"y": -837.5187842263688,
			"width": 0.7892539718492344,
			"height": 82.2014545906701,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 527577090,
			"version": 654,
			"versionNonce": 489226754,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.7892539718492344,
					82.2014545906701
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1430,
			"versionNonce": 1734448926,
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
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "o7WIzY222B3DLP8rEgQGI",
			"type": "arrow",
			"x": 438.1365818883685,
			"y": -949.8231725342279,
			"width": 0.35425292439958866,
			"height": 26.42833584637276,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 149154050,
			"version": 530,
			"versionNonce": 1786606018,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.35425292439958866,
					26.42833584637276
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "2euRC-OZkmsxUnsR28LP8",
			"type": "arrow",
			"x": 436.22905150772283,
			"y": -897.7106893124433,
			"width": 1.6053649097345897,
			"height": 29.402420770428648,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2139673566,
			"version": 306,
			"versionNonce": 992864642,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.6053649097345897,
					29.402420770428648
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "CU_i0j52KV5Sw-kO7v9mq",
				"focus": 0.15527627306994926,
				"gap": 3.6943881827996936
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "6_jIXS3Vr6hdGdzjpUgJW",
			"type": "arrow",
			"x": 448.4972004282513,
			"y": -854.7511106426948,
			"width": 103.28891845959936,
			"height": 5.083777106499269,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1968982494,
			"version": 863,
			"versionNonce": 1176561566,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					103.28891845959936,
					5.083777106499269
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "SFCvxDfHeNCyJLXg6WGor",
			"type": "arrow",
			"x": 884.6825890707803,
			"y": -925.7273134819438,
			"width": 295.59634424196213,
			"height": 139.77257635879016,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
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
			"seed": 1824290398,
			"version": 931,
			"versionNonce": 1450797378,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-295.59634424196213,
					139.77257635879016
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -0.6964837817874635,
				"gap": 5.388668675216195,
				"elementId": "hcS-Qj3dbfjSNH-Ck10V7"
			},
			"endBinding": {
				"focus": 0.5844913851471341,
				"gap": 3.477389801202605,
				"elementId": "2VJYlgsvl1mZLuibg7-T1"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1971,
			"versionNonce": 1998472158,
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
					"id": "9nOaMPD0Y3auFu-XxWbQn",
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
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "Hu_U6hdFUc10IcAm7-8qd",
			"type": "arrow",
			"x": 721.1287300410909,
			"y": 241.11679590466292,
			"width": 2.024511240305287,
			"height": 145.93393319977793,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1293930782,
			"version": 1572,
			"versionNonce": 1136587010,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					2.024511240305287,
					145.93393319977793
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "9dcAqQBuYmkFu-X-CSdCR",
			"type": "arrow",
			"x": 1085.8314490429282,
			"y": 16.589577446553797,
			"width": 94.21077898884892,
			"height": 59.829905440159216,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 318979906,
			"version": 889,
			"versionNonce": 279320606,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-94.21077898884892,
					59.829905440159216
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.923347310973255,
				"gap": 3.548461513591967,
				"elementId": "gyt1T5BmGMqi_0I0gtWJd"
			},
			"endBinding": {
				"focus": 1.2327305890191536,
				"gap": 7.12310553453581,
				"elementId": "vTI0zcR0tV5FOHIYEMZrI"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "ZFH6uf1cDyE4sWEjQ4Jks",
			"type": "rectangle",
			"x": -179.98148627651278,
			"y": -1063.317202357566,
			"width": 317.8651155988588,
			"height": 178,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1890755586,
			"version": 403,
			"versionNonce": 606485890,
			"isDeleted": false,
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
			"updated": 1717150100029,
			"link": null,
			"locked": false
		},
		{
			"id": "JjwI3M4U",
			"type": "text",
			"x": -172.5723659770834,
			"y": -1034.317202357566,
			"width": 303.046875,
			"height": 120,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1558892510,
			"version": 705,
			"versionNonce": 625425730,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150100029,
			"link": null,
			"locked": false,
			"text": "如果当前featuer有需要提交测试的\n内容，但是被提测节点阻塞时，且\n后续的开发需要基于当前的feature\n内容，需要在当前feature上拉新的\n分支开发，以避免影响提测",
			"rawText": "如果当前featuer有需要提交测试的内容，但是被提测节点阻塞时，且后续的开发需要基于当前的feature内容，需要在当前feature上拉新的分支开发，以避免影响提测",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ZFH6uf1cDyE4sWEjQ4Jks",
			"originalText": "如果当前featuer有需要提交测试的内容，但是被提测节点阻塞时，且后续的开发需要基于当前的feature内容，需要在当前feature上拉新的分支开发，以避免影响提测",
			"lineHeight": 1.2
		},
		{
			"type": "rectangle",
			"version": 1210,
			"versionNonce": 922298526,
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
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 1169,
			"versionNonce": 788641858,
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
			"boundElements": null,
			"updated": 1717149798861,
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
			"id": "HRBFQaDGZeuEJQu2x8bhn",
			"type": "arrow",
			"x": 1188.543853258075,
			"y": -1463.38135541151,
			"width": 178.32922279817546,
			"height": 12.17573617421499,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
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
			"seed": 648344002,
			"version": 55,
			"versionNonce": 88499422,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-178.32922279817546,
					12.17573617421499
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "HuSQh1fda3xyMkgGQ1IZo",
			"type": "arrow",
			"x": 96.05239012455071,
			"y": -870.1586368589246,
			"width": 1.8163187799680713,
			"height": 51.90692233193397,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
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
			"seed": 1216987294,
			"version": 857,
			"versionNonce": 853955778,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150100029,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.8163187799680713,
					51.90692233193397
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "ZFH6uf1cDyE4sWEjQ4Jks",
				"focus": -0.6998734725746015,
				"gap": 15.158565498641337
			},
			"endBinding": {
				"elementId": "KlCzGXfa",
				"focus": 0.030772241241660662,
				"gap": 7.333795569786531
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1945,
			"versionNonce": 1193416990,
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
				}
			],
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"id": "-xWV05qD0VhVEhnlrV0fa",
			"type": "arrow",
			"x": 558.5240626058954,
			"y": -647.0272136157937,
			"width": 3.0265028545909445,
			"height": 55.72022890146309,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1227097374,
			"version": 747,
			"versionNonce": 1182666690,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-3.0265028545909445,
					55.72022890146309
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "k8OtUFQJL-fZtNBQxG2sB",
			"type": "arrow",
			"x": 293.0076986585972,
			"y": -815.5655957483199,
			"width": 248.45368345753775,
			"height": 234.74253097690132,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 685685086,
			"version": 669,
			"versionNonce": 1945978206,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					248.45368345753775,
					234.74253097690132
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -0.04960657535066757,
				"gap": 1,
				"elementId": "j3ixQlZiLJha4TcLPXkxw"
			},
			"endBinding": {
				"focus": -0.3647977175516019,
				"gap": 1,
				"elementId": "I4AO728WHef6VTdFWBzk6"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1663,
			"versionNonce": 1231734658,
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
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"id": "uzcLSUjPBQSN_7ShIErH7",
			"type": "arrow",
			"x": 437.3746458947371,
			"y": -849.8782687078907,
			"width": 0.03377283557961164,
			"height": 56.53839894623616,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2030086466,
			"version": 50,
			"versionNonce": 1831397790,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.03377283557961164,
					56.53839894623616
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1660,
			"versionNonce": 90867522,
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
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"id": "M-i69j4rNYTlUJlwIe726",
			"type": "arrow",
			"x": 561.4550085823182,
			"y": -729.3056733616575,
			"width": 2.153807142524556,
			"height": 52.92835218405469,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1320580958,
			"version": 60,
			"versionNonce": 1104545246,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-2.153807142524556,
					52.92835218405469
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "P5DrMI5MyodHViSJZrA_b",
			"type": "arrow",
			"x": 447.2351601480483,
			"y": -771.3292159765076,
			"width": 96.9817631522302,
			"height": 99.8805126509094,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1813894914,
			"version": 90,
			"versionNonce": 1927040770,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					96.9817631522302,
					99.8805126509094
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "UnGnUpMZqf8QUqN7zYJ7D",
			"type": "arrow",
			"x": 568.3386040705717,
			"y": -583.7924857354674,
			"width": 128.99764396644423,
			"height": 21.46336119031912,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 144515102,
			"version": 413,
			"versionNonce": 1930795550,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					128.99764396644423,
					21.46336119031912
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "YYcfqYWn91OojurDY-A3d",
			"type": "rectangle",
			"x": 783.2412032998683,
			"y": -718.2115274489266,
			"width": 152.43239841929056,
			"height": 75.77416638575914,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 196138114,
			"version": 1832,
			"versionNonce": 641670850,
			"isDeleted": false,
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
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"id": "U1rWqu1V",
			"type": "text",
			"x": 790.4730275095136,
			"y": -704.3244442560471,
			"width": 137.96875,
			"height": 48,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 700086082,
			"version": 1782,
			"versionNonce": 936945246,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"text": "测试通过合入de\nvelop等待发布",
			"rawText": "测试通过合入develop等待发布",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "YYcfqYWn91OojurDY-A3d",
			"originalText": "测试通过合入develop等待发布",
			"lineHeight": 1.2
		},
		{
			"id": "5v4aikO-K_nL-lBXIUHJB",
			"type": "arrow",
			"x": 101.5063502870089,
			"y": -430.85305977191473,
			"width": 2.785364098309657,
			"height": 143.6693226852954,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2141840990,
			"version": 1112,
			"versionNonce": 1278342786,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					2.785364098309657,
					143.6693226852954
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1790,
			"versionNonce": 1089481374,
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
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2517,
			"versionNonce": 628348482,
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
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"id": "UsmCAD5m4ZnrT_WlDIqk9",
			"type": "arrow",
			"x": 128.6754565537027,
			"y": -276.146025098309,
			"width": 218.55020312674515,
			"height": 95.46661320802966,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 815017730,
			"version": 1007,
			"versionNonce": 2098013918,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					218.55020312674515,
					95.46661320802966
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 2104,
			"versionNonce": 816074782,
			"isDeleted": false,
			"id": "_zwYxmNywDXv7ZXw2hDnx",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 165.80175610370804,
			"y": -723.0757335197067,
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
			"updated": 1717149871641,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2130,
			"versionNonce": 142834654,
			"isDeleted": false,
			"id": "WagqSFwY",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 172.68249566708204,
			"y": -718.0757335197067,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 175.15625,
			"height": 96,
			"seed": 1733745374,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1717149871641,
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
			"id": "EWk4pnCLI2IlwDUPgbZDj",
			"type": "arrow",
			"x": 164.58600949876973,
			"y": -652.1690877202707,
			"width": 56.64494626851672,
			"height": 80.1105674575856,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
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
			"seed": 1743393566,
			"version": 971,
			"versionNonce": 2119146718,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149873452,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-56.64494626851672,
					80.1105674575856
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "SbbnYlup6f10zD2u9j32e",
			"type": "arrow",
			"x": 778.390104593145,
			"y": -675.8700232974404,
			"width": 51.35920404102137,
			"height": 100.97619262157787,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e3fafc",
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
			"seed": 851377246,
			"version": 226,
			"versionNonce": 1787751326,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-51.35920404102137,
					100.97619262157787
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "YYcfqYWn91OojurDY-A3d",
				"focus": 0.8251969263171014,
				"gap": 4.851098706723235
			},
			"endBinding": {
				"elementId": "yZI_DtfhVAXIPqZuzvBJB",
				"focus": 0.6067503180762692,
				"gap": 9.850490983246814
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 2382,
			"versionNonce": 1882217986,
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
			"width": 446.28029872972616,
			"height": 236.24543901272364,
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
			"updated": 1717150138822,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2983,
			"versionNonce": 938362178,
			"isDeleted": false,
			"id": "pqWwdvrG",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1037.7447235459404,
			"y": 407.76450031674267,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 432.96875,
			"height": 192,
			"seed": 837000158,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717150138822,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "当多个不同的版本release出现相同的bug时：\n1、在任意release分支拉出hotfix分支进行修复，\n修复并通过测试后合回对应release\n2、在其他需要修复的release中也拉出hotfix分支\n3、将为【1】中的hotfix对应的修复提交cherrypic\nk到【2】拉出的hotfix分支中，测试通过后也合并\n回对应的release\n4、将最新的release变更合并回对应的devlop分支",
			"rawText": "当多个不同的版本release出现相同的bug时：\n1、在任意release分支拉出hotfix分支进行修复，修复并通过测试后合回对应release\n2、在其他需要修复的release中也拉出hotfix分支\n3、将为【1】中的hotfix对应的修复提交cherrypick到【2】拉出的hotfix分支中，测试通过后也合并回对应的release\n4、将最新的release变更合并回对应的devlop分支",
			"textAlign": "left",
			"verticalAlign": "middle",
			"containerId": "uDcEeE0hdwfwO8Mn42tkT",
			"originalText": "当多个不同的版本release出现相同的bug时：\n1、在任意release分支拉出hotfix分支进行修复，修复并通过测试后合回对应release\n2、在其他需要修复的release中也拉出hotfix分支\n3、将为【1】中的hotfix对应的修复提交cherrypick到【2】拉出的hotfix分支中，测试通过后也合并回对应的release\n4、将最新的release变更合并回对应的devlop分支",
			"lineHeight": 1.2
		},
		{
			"id": "NZfJO84Q-yWa9TAKWFyb4",
			"type": "arrow",
			"x": 1447.8406035617527,
			"y": -426.8423815962916,
			"width": 14.280329372885262,
			"height": 184.3760449399026,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
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
			"seed": 1636456478,
			"version": 449,
			"versionNonce": 294346334,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150085870,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-14.280329372885262,
					184.3760449399026
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "mCwa_L6YMHWBj9XGV9uky",
				"focus": -0.05922727354729058,
				"gap": 8.131091907969903
			},
			"endBinding": {
				"elementId": "jFDLcqqS",
				"focus": 1.1838172541493346,
				"gap": 10.743792706588692
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 2004,
			"versionNonce": 2068594946,
			"isDeleted": false,
			"id": "mCwa_L6YMHWBj9XGV9uky",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1346.7466930291623,
			"y": -588.9734735042615,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"width": 202.6652492778588,
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
				}
			],
			"updated": 1717150055033,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2156,
			"versionNonce": 1071698114,
			"isDeleted": false,
			"id": "ZJwcpfWr",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1357.2199426680918,
			"y": -583.9734735042615,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 181.71875,
			"height": 144,
			"seed": 460407810,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717150055033,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 4,
			"text": "需要发布企业版定制\n版时，从develop拉新\n的release分支作为发\n布分支，同时需要对\n应新的develop和test\n分支",
			"rawText": "需要发布企业版定制版时，从develop拉新的release分支作为发布分支，同时需要对应新的develop和test分支",
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "mCwa_L6YMHWBj9XGV9uky",
			"originalText": "需要发布企业版定制版时，从develop拉新的release分支作为发布分支，同时需要对应新的develop和test分支",
			"lineHeight": 1.2
		},
		{
			"id": "bHp-kjsX6wlwcnzEMhyF3",
			"type": "arrow",
			"x": 1371.7366084300118,
			"y": -219.6850787094249,
			"width": 5.130803942731973,
			"height": 56.09206210768863,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 651046018,
			"version": 189,
			"versionNonce": 807790686,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					5.130803942731973,
					56.09206210768863
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1037,
			"versionNonce": 1003607170,
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
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"id": "dwQsPydpdPsFOh4-XtXqM",
			"type": "arrow",
			"x": 1099.167440093875,
			"y": -32.879944297162446,
			"width": 0.08217652505572914,
			"height": 33.78266784758261,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 731998210,
			"version": 492,
			"versionNonce": 38087838,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.08217652505572914,
					33.78266784758261
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "text",
			"version": 1415,
			"versionNonce": 292025410,
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
			"updated": 1717149798861,
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
			"id": "264FCYvWUOfOKBLoIKtgv",
			"type": "arrow",
			"x": 1099.4867094684619,
			"y": -92.78675200293178,
			"width": 0.5962516038794092,
			"height": 35.23361927658197,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 601828382,
			"version": 346,
			"versionNonce": 1453595650,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.5962516038794092,
					35.23361927658197
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1458,
			"versionNonce": 1782390046,
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
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"id": "7dQTG6vWCLALtBBPwrsIk",
			"type": "arrow",
			"x": 1198.7225228234572,
			"y": 91.39609831875444,
			"width": 0.9453571903068223,
			"height": 66.3736325987802,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 719994654,
			"version": 209,
			"versionNonce": 965036994,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.9453571903068223,
					66.3736325987802
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "2yRWrsyuDNMECOODyMfKT",
			"type": "arrow",
			"x": 1198.8841987674382,
			"y": 17.20215476416675,
			"width": 1.3046398535923345,
			"height": 50.08140181421511,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 712985374,
			"version": 322,
			"versionNonce": 85444958,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.3046398535923345,
					50.08140181421511
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "FTiNMt1AasdfAXYUcovsq",
			"type": "arrow",
			"x": 1227.4219960941348,
			"y": 382.18279136300964,
			"width": 26.801579037414058,
			"height": 165.48087977742028,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
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
			"seed": 1097756162,
			"version": 1403,
			"versionNonce": 17712514,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150138822,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-26.801579037414058,
					-165.48087977742028
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "yLw0G5h3k0hxMzVeBj-Jz",
			"type": "arrow",
			"x": 845.24560169646,
			"y": -1307.3061721874105,
			"width": 0.784483679762161,
			"height": 42.889256800964404,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 690787998,
			"version": 169,
			"versionNonce": 5434782,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.784483679762161,
					42.889256800964404
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "zwTRXh94NuLCpnD-z2J9Y",
			"type": "arrow",
			"x": 841.3012561799152,
			"y": -1236.7849083085478,
			"width": 0.16115721175026465,
			"height": 36.389834607758985,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1894616542,
			"version": 94,
			"versionNonce": 349356866,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.16115721175026465,
					36.389834607758985
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 468,
			"versionNonce": 1763674590,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 932,
			"versionNonce": 2123275806,
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
			"updated": 1717149798862,
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
			"version": 2163,
			"versionNonce": 1841846978,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2249,
			"versionNonce": 1972447838,
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
					"id": "v5OOPVomy1WeoQspucYyw",
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "oiPiBhQTRYyK2_oDRG6i9",
			"type": "arrow",
			"x": 350.2915347271529,
			"y": -440.1641698000326,
			"width": 0.15163782775317713,
			"height": 62.58738596887997,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 978209246,
			"version": 47,
			"versionNonce": 1194570370,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.15163782775317713,
					62.58738596887997
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "yZwOXdytHbGG_lFk15QX9",
			"type": "arrow",
			"x": 354.7596935857316,
			"y": -354.5333095815696,
			"width": 3.3639144412017004,
			"height": 75.00238578160264,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1136599298,
			"version": 162,
			"versionNonce": 1022897822,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					3.3639144412017004,
					75.00238578160264
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 2340,
			"versionNonce": 1418893250,
			"isDeleted": false,
			"id": "ezZNRr3laRT_RCS_Nh3KI",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -47.953834585345135,
			"y": 380.1483458715544,
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
			"updated": 1717150125865,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 2857,
			"versionNonce": 209870402,
			"isDeleted": false,
			"id": "4bkNShCv",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -41.05339036680249,
			"y": 385.1483458715544,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 340,
			"height": 168,
			"seed": 1945594014,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717150127090,
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
			"id": "TRhVQAh0v9l3CQ-7Cs5X-",
			"type": "arrow",
			"x": 373.0380782987094,
			"y": -92.12777076213894,
			"width": 163.36615544807802,
			"height": 48.57364904701707,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 327336670,
			"version": 388,
			"versionNonce": 78471554,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					163.36615544807802,
					48.57364904701707
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "DgktlVQT",
			"type": "text",
			"x": -48.69685019779942,
			"y": -616.939169241381,
			"width": 18.015975952148438,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 2141116958,
			"version": 1539,
			"versionNonce": 1886711710,
			"isDeleted": false,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"text": "f6",
			"rawText": "f6",
			"fontSize": 16,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f6",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 2438,
			"versionNonce": 1763694210,
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
			"updated": 1717149835987,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2390,
			"versionNonce": 731389982,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "YVC6nBNT1A9uSiPYYNoQz",
			"type": "arrow",
			"x": -41.930980252164716,
			"y": -486.9581390883211,
			"width": 1.4286173839812477,
			"height": 51.47907044049424,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 39760670,
			"version": 3935,
			"versionNonce": 294648002,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.4286173839812477,
					51.47907044049424
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "y5nPt_8MzR_qd2sXK16B6",
			"type": "arrow",
			"x": -40.09043499792453,
			"y": -591.4974721940009,
			"width": 1.8730989084860568,
			"height": 71.0311096057909,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1994229790,
			"version": 3011,
			"versionNonce": 169503838,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					1.8730989084860568,
					71.0311096057909
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "qK2Fjhute0dAIX2W9wpUk",
			"type": "arrow",
			"x": -33.995246622341334,
			"y": -399.13395636078064,
			"width": 0.9790124125435611,
			"height": 143.93437376655265,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 887910658,
			"version": 1738,
			"versionNonce": 207065218,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.9790124125435611,
					143.93437376655265
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 2530,
			"versionNonce": 856240286,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "2qVnLdzsV2S6jaAq2B2lD",
			"type": "arrow",
			"x": -24.425570345616393,
			"y": -420.3582544168536,
			"width": 363.56246920631423,
			"height": 153.55292684056894,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1999003138,
			"version": 701,
			"versionNonce": 1104556098,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					363.56246920631423,
					153.55292684056894
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1932,
			"versionNonce": 303394014,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "l9erLuoD9NInfQDKhgCtc",
			"type": "arrow",
			"x": 359.8906943067044,
			"y": -243.8583850130513,
			"width": 0.23163615662281245,
			"height": 57.045027819598914,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1310058590,
			"version": 250,
			"versionNonce": 1441454082,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.23163615662281245,
					57.045027819598914
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1995,
			"versionNonce": 1959797022,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "EhKN0UsZqNOWeWc0lTJ6q",
			"type": "arrow",
			"x": -17.105162956660507,
			"y": -244.19653984984046,
			"width": 357.55827578556693,
			"height": 150.40337196366738,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1788986398,
			"version": 85,
			"versionNonce": 1319783774,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					357.55827578556693,
					150.40337196366738
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "SmkQeAcrt49cD32ThhWG1",
			"type": "arrow",
			"x": 362.05371641818545,
			"y": -164.0809708065386,
			"width": 0.999417036620116,
			"height": 50.89344489832453,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1258871362,
			"version": 50,
			"versionNonce": 32653186,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.999417036620116,
					50.89344489832453
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 2659,
			"versionNonce": 2096427422,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2754,
			"versionNonce": 776142658,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "fcvF3LLxQWMozeT1nH-wV",
			"type": "arrow",
			"x": 342.55303995545825,
			"y": -96.05539662386875,
			"width": 211.20904780318034,
			"height": 24.572908638495832,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 597482718,
			"version": 197,
			"versionNonce": 182521310,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-211.20904780318034,
					24.572908638495832
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "RWix6X1rAqFbbg_yCZ0qP",
			"type": "arrow",
			"x": 347.60671396407076,
			"y": -86.83143053670383,
			"width": 360.13971214539004,
			"height": 99.08199246544507,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1190103682,
			"version": 177,
			"versionNonce": 1971298846,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-360.13971214539004,
					99.08199246544507
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "XiPEdO5csJRBAKM5bV_8j",
			"type": "arrow",
			"x": 104.70766665912744,
			"y": -260.90414630806515,
			"width": 2.074790351714668,
			"height": 175.96958915240538,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1431559618,
			"version": 198,
			"versionNonce": 1566152386,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					2.074790351714668,
					175.96958915240538
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "LmJWSFm9bZrRiQMBK6mub",
			"type": "arrow",
			"x": -29.776174414027345,
			"y": -234.87831525479896,
			"width": 1.960993960704478,
			"height": 231.18203819148707,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 259591582,
			"version": 122,
			"versionNonce": 1874964062,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-1.960993960704478,
					231.18203819148707
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 2828,
			"versionNonce": 645411486,
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2907,
			"versionNonce": 72625886,
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
					"id": "lNDhcH7iijdFRwLzL4eac",
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
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "A4_fX_PtY0svzaFlG6nG0",
			"type": "arrow",
			"x": 109.7130778778714,
			"y": -60.69213118199207,
			"width": 2.0522932216495064,
			"height": 79.62670353284264,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1792300546,
			"version": 72,
			"versionNonce": 1030829570,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-2.0522932216495064,
					79.62670353284264
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "RxQBN5jmbxbGo6qGwg6r7",
			"type": "arrow",
			"x": -31.84019788509677,
			"y": 23.78875685090307,
			"width": 0.567811603042017,
			"height": 57.22412899709832,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 579288414,
			"version": 135,
			"versionNonce": 1978049310,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.567811603042017,
					57.22412899709832
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "5fqbpG5yICn4oZSK4yFls",
			"type": "arrow",
			"x": 557.9659431248385,
			"y": -33.89069130237213,
			"width": 0.6389042082805645,
			"height": 113.77248887077506,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1030437570,
			"version": 225,
			"versionNonce": 1000285634,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.6389042082805645,
					113.77248887077506
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "dQVkeRRCYdEk0xMLYJajx",
			"type": "rectangle",
			"x": 319.8558915280345,
			"y": 198.98275155518047,
			"width": 91.4601402879209,
			"height": 64.4032613053671,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 102030594,
			"version": 446,
			"versionNonce": 765497182,
			"isDeleted": false,
			"boundElements": [
				{
					"id": "_9efvgrg4yGcpHWROun3Z",
					"type": "arrow"
				}
			],
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1909,
			"versionNonce": 1741878174,
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
			"updated": 1717149798863,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 2036,
			"versionNonce": 1774067010,
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
			"updated": 1717149798863,
			"link": null,
			"locked": false
		},
		{
			"id": "DUuEmxzkPRnkGXwcImfdl",
			"type": "arrow",
			"x": 559.9845909568612,
			"y": 108.65151981927802,
			"width": 0.5916067627510984,
			"height": 67.23413163115522,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 811217026,
			"version": 435,
			"versionNonce": 783208414,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.5916067627510984,
					67.23413163115522
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "GldRuVFhBaaK6iaGSkUOY",
			"type": "arrow",
			"x": 121.66957420868926,
			"y": 32.76261549429499,
			"width": 421.4893928968688,
			"height": 57.78618788276803,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1917092702,
			"version": 197,
			"versionNonce": 1951212802,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					421.4893928968688,
					57.78618788276803
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "5Wvd47YdaPUGBR7lTe-ec",
			"type": "arrow",
			"x": -20.62218633056716,
			"y": 101.95978479916792,
			"width": 568.3697372042249,
			"height": 81.59939503836497,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 857209502,
			"version": 233,
			"versionNonce": 507847710,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					568.3697372042249,
					81.59939503836497
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "mhxDM21GqLVPFXIaHrfAe",
			"type": "arrow",
			"x": 572.7130579890239,
			"y": 196.87317592775298,
			"width": 138.7638659234749,
			"height": 195.44318872905785,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 124855106,
			"version": 75,
			"versionNonce": 679931998,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					138.7638659234749,
					195.44318872905785
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "VFk2HMuGGLXYnShyyDlVh",
			"type": "arrow",
			"x": 973.6603097295529,
			"y": 85.39655272280771,
			"width": 6.994272833344439,
			"height": 521.5633898692324,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1357742146,
			"version": 67,
			"versionNonce": 1004883074,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-6.994272833344439,
					521.5633898692324
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.18820390382166757,
				"gap": 3.2207147101575373,
				"elementId": "vTI0zcR0tV5FOHIYEMZrI"
			},
			"endBinding": {
				"elementId": "65m71FrYDQmgRPBECUAx0",
				"focus": 0.015749250052500816,
				"gap": 8.264302261720735
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 2120,
			"versionNonce": 1497707678,
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
			"updated": 1717149798863,
			"link": null,
			"locked": false
		},
		{
			"id": "zULlobt91g-6DsXsI5Toi",
			"type": "arrow",
			"x": 732.4464877573664,
			"y": 412.2996724286627,
			"width": 223.2750476345907,
			"height": 204.3243648260767,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1506696450,
			"version": 87,
			"versionNonce": 439415006,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					223.2750476345907,
					204.3243648260767
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 802,
			"versionNonce": 546914306,
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
			"updated": 1717149965476,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 743,
			"versionNonce": 1362489282,
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
			"boundElements": null,
			"updated": 1717149965476,
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
			"id": "Q78M6JqheVIVtRKq2tgQA",
			"type": "arrow",
			"x": 834.3309917271829,
			"y": 598.2868372244046,
			"width": 114.11396180930342,
			"height": 16.463827824890473,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
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
			"seed": 275099742,
			"version": 1109,
			"versionNonce": 1806329666,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149965476,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					114.11396180930342,
					16.463827824890473
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 2130,
			"versionNonce": 1622462814,
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
					"id": "zbV96MJ65T___sFjzzi1q",
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
					"id": "LyiaUY_PY_cjV977PpKH6",
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
					"id": "v5OOPVomy1WeoQspucYyw",
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
					"id": "9nOaMPD0Y3auFu-XxWbQn",
					"type": "arrow"
				},
				{
					"id": "AyNBJlGL_R_mQA8u8smPh",
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
			"updated": 1717149798863,
			"link": null,
			"locked": false
		},
		{
			"id": "PapDiQqadOgIEatOlF0As",
			"type": "arrow",
			"x": 551.6008906860677,
			"y": 194.521773874289,
			"width": 168.12512771396848,
			"height": 39.74654559542782,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 715720386,
			"version": 191,
			"versionNonce": 1321335682,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-168.12512771396848,
					39.74654559542782
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "pXVPz2XA8eRwjdJ8DCd0k",
			"type": "arrow",
			"x": 360.0219326826992,
			"y": -89.21097465068634,
			"width": 4.872075978151543,
			"height": 311.2102609489451,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1579377374,
			"version": 173,
			"versionNonce": 924488158,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					4.872075978151543,
					311.2102609489451
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "rectangle",
			"version": 2699,
			"versionNonce": 812099586,
			"isDeleted": false,
			"id": "ODpk3BNh9YMyNzaOwWhDR",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 384.2609978468877,
			"y": 453.1594842942202,
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
			"updated": 1717150090479,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 3472,
			"versionNonce": 720852930,
			"isDeleted": false,
			"id": "bP4LqYcP",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 391.1614420654303,
			"y": 471.1068982393244,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 340,
			"height": 96,
			"seed": 2118320706,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717150090479,
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
			"id": "UKX4Jf9Cr4X16rJzjMgbR",
			"type": "arrow",
			"x": 180.62300875759405,
			"y": 371.5098829761879,
			"width": 67.19556373718427,
			"height": 105.71390056544101,
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
			"seed": 635828226,
			"version": 456,
			"versionNonce": 245706114,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150128192,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					67.19556373718427,
					-105.71390056544101
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "ezZNRr3laRT_RCS_Nh3KI",
				"gap": 8.638462895366501,
				"focus": -0.0553293360745272
			},
			"endBinding": {
				"elementId": "OhWBVLkHqRP8HYoL3igO7",
				"gap": 9.573925970219648,
				"focus": -0.061153985039057356
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "_9efvgrg4yGcpHWROun3Z",
			"type": "arrow",
			"x": 501.3404891831283,
			"y": 444.5693944350128,
			"width": 111.35381598196,
			"height": 179.47055927068925,
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
			"seed": 1898700702,
			"version": 899,
			"versionNonce": 36818754,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717150090479,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-111.35381598196,
					-179.47055927068925
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "ODpk3BNh9YMyNzaOwWhDR",
				"focus": -0.062173455067211995,
				"gap": 8.590089859207438
			},
			"endBinding": {
				"elementId": "dQVkeRRCYdEk0xMLYJajx",
				"focus": -0.05110716798718901,
				"gap": 1.7128223037759653
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "DHrz8gBKwDJbig7BiqB9E",
			"type": "arrow",
			"x": 705.4861803305201,
			"y": -556.5232565795786,
			"width": 725.9761099449712,
			"height": 56.31816910784471,
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
			"roundness": {
				"type": 2
			},
			"seed": 1437315806,
			"version": 81,
			"versionNonce": 179998146,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1717149841205,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-725.9761099449712,
					56.31816910784471
				]
			],
			"lastCommittedPoint": null,
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
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "j9h0WSbo",
			"type": "text",
			"x": 558.4892661136098,
			"y": -871.263337686897,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1436028574,
			"version": 9,
			"versionNonce": 1097581954,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798855,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ouqqdH4MPBGYe7HQSG7ff",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "2VJYlgsvl1mZLuibg7-T1",
			"type": "rectangle",
			"x": 697.4772443143947,
			"y": -1007.4748514766864,
			"width": 40.19128791249168,
			"height": 474.2924266928208,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e3fafc",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1234806146,
			"version": 739,
			"versionNonce": 736077790,
			"isDeleted": true,
			"boundElements": [
				{
					"id": "SbbnYlup6f10zD2u9j32e",
					"type": "arrow"
				}
			],
			"updated": 1717149798855,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 303,
			"versionNonce": 348386434,
			"isDeleted": true,
			"id": "hzODnv3FWijQrBGnLNvvg",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 239.95098961688052,
			"y": -1333.7714416084702,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.68798828125,
			"height": 132.03903198242188,
			"seed": 770684430,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"startBinding": null,
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
					-0.68798828125,
					132.03903198242188
				]
			]
		},
		{
			"id": "7vZZR5mnfym_nqLluOO1m",
			"type": "ellipse",
			"x": 705.0691751281771,
			"y": -1355.683533235886,
			"width": 15.57513427734375,
			"height": 52.83287048339844,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1578364802,
			"version": 97,
			"versionNonce": 1381923522,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false
		},
		{
			"id": "3GzzQlWPavIf7oxPM5o5r",
			"type": "freedraw",
			"x": 713.9006570617709,
			"y": -1350.830994173386,
			"width": 322.9966735839844,
			"height": 36.49687194824219,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 898172098,
			"version": 58,
			"versionNonce": 1784991646,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798856,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-3.9923095703125,
					-0.64764404296875
				],
				[
					-13.27166748046875,
					-2.0940399169921875
				],
				[
					-25.17987060546875,
					-3.3556976318359375
				],
				[
					-42.070068359375,
					-5.4345855712890625
				],
				[
					-59.67108154296875,
					-7.5403289794921875
				],
				[
					-73.83642578125,
					-8.638046264648438
				],
				[
					-87.79669189453125,
					-10.003097534179688
				],
				[
					-103.3519287109375,
					-11.869384765625
				],
				[
					-117.0517578125,
					-13.403945922851562
				],
				[
					-126.32965087890625,
					-14.022491455078125
				],
				[
					-133.96051025390625,
					-14.27972412109375
				],
				[
					-141.260498046875,
					-14.338897705078125
				],
				[
					-148.32000732421875,
					-14.338897705078125
				],
				[
					-154.447998046875,
					-14.343368530273438
				],
				[
					-160.07464599609375,
					-14.52099609375
				],
				[
					-164.08148193359375,
					-14.682418823242188
				],
				[
					-167.8353271484375,
					-14.682418823242188
				],
				[
					-172.5001220703125,
					-14.697341918945312
				],
				[
					-177.31036376953125,
					-14.697341918945312
				],
				[
					-181.38134765625,
					-14.6988525390625
				],
				[
					-185.2857666015625,
					-14.512283325195312
				],
				[
					-190.12469482421875,
					-14.243637084960938
				],
				[
					-194.76409912109375,
					-13.804397583007812
				],
				[
					-204.068603515625,
					-11.805404663085938
				],
				[
					-210.5386962890625,
					-10.359817504882812
				],
				[
					-219.6104736328125,
					-8.140548706054688
				],
				[
					-228.8551025390625,
					-5.948089599609375
				],
				[
					-236.57830810546875,
					-3.8931884765625
				],
				[
					-246.48486328125,
					-1.021514892578125
				],
				[
					-258.77789306640625,
					2.283935546875
				],
				[
					-272.1859130859375,
					5.7877197265625
				],
				[
					-283.14202880859375,
					8.738723754882812
				],
				[
					-292.57257080078125,
					11.411453247070312
				],
				[
					-303.1401672363281,
					14.29351806640625
				],
				[
					-311.12005615234375,
					16.380447387695312
				],
				[
					-315.167236328125,
					17.509628295898438
				],
				[
					-317.87060546875,
					18.361251831054688
				],
				[
					-319.8722229003906,
					19.130722045898438
				],
				[
					-321.30694580078125,
					19.986083984375
				],
				[
					-322.28106689453125,
					20.64404296875
				],
				[
					-322.6741943359375,
					21.037200927734375
				],
				[
					-322.91278076171875,
					21.3717041015625
				],
				[
					-322.96783447265625,
					21.569992065429688
				],
				[
					-322.9966735839844,
					21.798019409179688
				],
				[
					-322.9966735839844,
					21.798019409179688
				]
			],
			"pressures": [],
			"simulatePressure": true,
			"lastCommittedPoint": [
				-322.9966735839844,
				21.798019409179688
			]
		},
		{
			"id": "wFpb6OrqPpeBM8bL0tM_G",
			"type": "arrow",
			"x": 722.3096137432296,
			"y": -1338.3380365425992,
			"width": 2.6401074945300707,
			"height": 356.1848274428992,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1652274718,
			"version": 141,
			"versionNonce": 1102034626,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-2.6401074945300707,
					356.1848274428992
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.013275247142763897,
				"gap": 1,
				"elementId": "4bFpT96_2v7bvUy9MnG0G"
			},
			"endBinding": {
				"focus": -0.031120408585516377,
				"gap": 3.4031005215506376,
				"elementId": "CaVkTGHpnnFHstkhdQlTs"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "ewX-PUIUVzPCheu5zzZN4",
			"type": "arrow",
			"x": 717.6408801351607,
			"y": -958.1983955373767,
			"width": 3.3052927214301917,
			"height": 174.83249201415276,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1761922434,
			"version": 244,
			"versionNonce": 1573883522,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					3.3052927214301917,
					174.83249201415276
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "CaVkTGHpnnFHstkhdQlTs",
				"focus": 0.26385364728742433,
				"gap": 3.150674987665143
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 607,
			"versionNonce": 1402475166,
			"isDeleted": true,
			"id": "RYp-EEzpOavrDwGIrQyPx",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 710.5621745633355,
			"y": -772.3366766300137,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 612522334,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "85Q61Q16f8IEjNi2UQ524",
					"type": "arrow"
				},
				{
					"id": "ewX-PUIUVzPCheu5zzZN4",
					"type": "arrow"
				},
				{
					"id": "VUUSfYE3M-MvAOwSXRJnp",
					"type": "arrow"
				}
			],
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"id": "zOD1Z5QI1e8p_dnccvNEr",
			"type": "arrow",
			"x": 963.2216843095327,
			"y": -645.7296727159573,
			"width": 2.532961253384883,
			"height": 150.46457004960416,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 739882498,
			"version": 407,
			"versionNonce": 1604218434,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					2.532961253384883,
					-150.46457004960416
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.007621955093003289,
				"gap": 9.43705406759981,
				"elementId": "npxSqkWlpfhF23jV7-u8f"
			},
			"endBinding": {
				"elementId": "EO8sNgeWUrsXn_FTcEMAX",
				"focus": -0.3164376526346777,
				"gap": 5.199195549381029
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "Ork_B98wIt_EPd1h1iGMx",
			"type": "arrow",
			"x": 969.5280028596582,
			"y": -1383.9769964954407,
			"width": 1.8248203713161502,
			"height": 558.6720210371351,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1682588894,
			"version": 396,
			"versionNonce": 1274762754,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-1.8248203713161502,
					558.6720210371351
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -0.460496282928353,
				"gap": 4.026029520452854,
				"elementId": "PiuN5VXCsZK4KZSsU_YJg"
			},
			"endBinding": {
				"focus": 0.4949425253421971,
				"gap": 6.06559176749621,
				"elementId": "EO8sNgeWUrsXn_FTcEMAX"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 674,
			"versionNonce": 369283998,
			"isDeleted": true,
			"id": "2I6aAKQ9x3DN2KpG4SlKK",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 704.6857291864005,
			"y": -729.0258604935115,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#eebefa",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1535202370,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "Gaz9ZYRFnl_6AtiMEjVwX",
					"type": "arrow"
				},
				{
					"id": "VUUSfYE3M-MvAOwSXRJnp",
					"type": "arrow"
				},
				{
					"id": "xNDghdFcVxmdoFRyGqdZy",
					"type": "arrow"
				}
			],
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"id": "Gaz9ZYRFnl_6AtiMEjVwX",
			"type": "arrow",
			"x": 720.6218197215176,
			"y": -859.8905306425302,
			"width": 3.403200704308574,
			"height": 123.79480892842548,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1907465346,
			"version": 394,
			"versionNonce": 1273147358,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-3.403200704308574,
					123.79480892842548
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "RYp-EEzpOavrDwGIrQyPx",
				"focus": 0.006281269797143821,
				"gap": 1.281537269629636
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 807,
			"versionNonce": 609709186,
			"isDeleted": true,
			"id": "F6f7KAdzQbozix5bgPPqM",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 703.5915499874177,
			"y": -691.9632599786657,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 334037662,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "YEcab3CGW62Tyq9nav7A8",
					"type": "arrow"
				}
			],
			"updated": 1717149798857,
			"link": null,
			"locked": false
		},
		{
			"id": "9XJTCHLWYNBq0-mSFXM-9",
			"type": "arrow",
			"x": 1098.9384793682325,
			"y": -1223.09769344203,
			"width": 0.8780965617635275,
			"height": 23.625715882207032,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1783502942,
			"version": 398,
			"versionNonce": 1438680606,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798857,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.8780965617635275,
					23.625715882207032
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "qLC8aj2pob9HIuUj4AtB0",
			"type": "arrow",
			"x": 713.8950088115143,
			"y": -1167.468263424898,
			"width": 97.89829154692018,
			"height": 34.26325408863886,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1331848130,
			"version": 90,
			"versionNonce": 1125701534,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					7.39243954436472,
					0
				],
				[
					60.0538638830368,
					18.659752933365326
				],
				[
					46.7244383719285,
					13.543835489916546
				],
				[
					97.89829154692018,
					34.26325408863886
				]
			],
			"lastCommittedPoint": [
				97.89829154692018,
				34.26325408863886
			],
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "LyiaUY_PY_cjV977PpKH6",
			"type": "arrow",
			"x": 581.7527877390777,
			"y": -948.1811216101114,
			"width": 130.15240168201979,
			"height": 72.67583982504436,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 577896706,
			"version": 211,
			"versionNonce": 498757634,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					130.15240168201979,
					72.67583982504436
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -0.20675408793405026,
				"gap": 7.327394472094648,
				"elementId": "spaobhXdgSlQtQjWcbVzW"
			},
			"endBinding": {
				"focus": -0.012947535676749052,
				"gap": 1,
				"elementId": "RYp-EEzpOavrDwGIrQyPx"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "DODOUNKdNsWBkSZarSbNN",
			"type": "arrow",
			"x": 287.752889977213,
			"y": -1405.8284775588306,
			"width": 69.45316023732585,
			"height": 4.48066248201917,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 510367518,
			"version": 47,
			"versionNonce": 90573086,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-69.45316023732585,
					-4.48066248201917
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "DgktlVQT",
				"focus": 0.6886861743711385,
				"gap": 1.2218160453249425
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "zbV96MJ65T___sFjzzi1q",
			"type": "arrow",
			"x": 316.93596025249724,
			"y": -956.1440314158399,
			"width": 185.62214511924435,
			"height": 66.19849341681174,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 311733890,
			"version": 564,
			"versionNonce": 482072450,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					185.62214511924435,
					66.19849341681174
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "Dn8IZVIt_TD0DzRFFtWf7",
			"type": "arrow",
			"x": 356.91030265062625,
			"y": -1093.2809206019435,
			"width": 64.97996475678246,
			"height": 164.88665242451555,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 83002782,
			"version": 109,
			"versionNonce": 1813616450,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-64.97996475678246,
					164.88665242451555
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "3BFCwLPF0n77ASn96HssJ",
				"focus": 0.4255459101841436,
				"gap": 4.258961630167722
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "zdUChMKBz53WJec4YFFVC",
			"type": "arrow",
			"x": 776.5213559335098,
			"y": -636.9087600964306,
			"width": 118.61627809317667,
			"height": 7.350787780242399,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 492879454,
			"version": 81,
			"versionNonce": 1947919938,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-118.61627809317667,
					-7.350787780242399
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "v5OOPVomy1WeoQspucYyw",
			"type": "arrow",
			"x": 573.7909071654122,
			"y": -738.5938601774759,
			"width": 128.13466399949994,
			"height": 17.35250961251893,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 89110658,
			"version": 270,
			"versionNonce": 471799518,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					128.13466399949994,
					17.35250961251893
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": -0.23590282756560324,
				"gap": 4.122213453080899,
				"elementId": "MHPqF6KnsnTuIjmPE90By"
			},
			"endBinding": {
				"focus": -0.00033462158554353,
				"gap": 2.86765091446809,
				"elementId": "2I6aAKQ9x3DN2KpG4SlKK"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "oSkBPMHxo5aM5vB0ZZ8BS",
			"type": "arrow",
			"x": 691.2851267946565,
			"y": -1387.3499025826864,
			"width": 41.3638212378645,
			"height": 14.003098666059032,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1026768478,
			"version": 98,
			"versionNonce": 170446338,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-41.3638212378645,
					-14.003098666059032
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "1yNrqrp9p8w5JBv8Aom4x",
			"type": "arrow",
			"x": 515.8973216958727,
			"y": -1221.7769677791819,
			"width": 0.46764070115159484,
			"height": 24.03718313684749,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 898074242,
			"version": 125,
			"versionNonce": 605326110,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.46764070115159484,
					24.03718313684749
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "YAXEDxiK",
			"type": "text",
			"x": 589.3739828972095,
			"y": -1238.2883913688004,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1596923714,
			"version": 13,
			"versionNonce": 902150110,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "f2rtc5rP_7_pLzZ7D0P_a",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "er92XerTFmGh-C1X2bT_e",
			"type": "arrow",
			"x": 721.8490104885199,
			"y": -583.0590582295104,
			"width": 503.6569022546138,
			"height": 230.32719934363354,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 238607262,
			"version": 225,
			"versionNonce": 1014545666,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					503.6569022546138,
					230.32719934363354
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "fa-VJqBl4y3W1xfJhLRjo",
				"focus": 0.3866709981892153,
				"gap": 2.326238740553661
			},
			"endBinding": {
				"elementId": "npxSqkWlpfhF23jV7-u8f",
				"focus": -0.3566978328668585,
				"gap": 5.709780038461902
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "OoLb1yHyTAbna7nnWz_Bv",
			"type": "ellipse",
			"x": 1009.3483626733836,
			"y": -498.9341278055874,
			"width": 78.60518912793475,
			"height": 28.275535952855535,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1448551454,
			"version": 71,
			"versionNonce": 1916734494,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"id": "UyeLH2ML",
			"type": "text",
			"x": 1004.4898322647186,
			"y": -1448.2779644294317,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1163422914,
			"version": 12,
			"versionNonce": 1879762050,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798858,
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
			"type": "ellipse",
			"version": 1285,
			"versionNonce": 367336606,
			"isDeleted": true,
			"id": "Ewm7nitYD9RlRLNYCIi6L",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 967.7161979942894,
			"y": -381.43895871941766,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 30,
			"height": 48,
			"seed": 442556766,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1717149798858,
			"link": null,
			"locked": false
		},
		{
			"id": "8BMPlYT6",
			"type": "text",
			"x": 977.6095962764912,
			"y": -369.4095214678948,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 77157918,
			"version": 14,
			"versionNonce": 2080310338,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "Ewm7nitYD9RlRLNYCIi6L",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "DbgZZV8W",
			"type": "text",
			"x": 877.9616712349842,
			"y": -488.1525072037982,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1908549726,
			"version": 12,
			"versionNonce": 362306498,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798859,
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
			"id": "lxU_jCJlWVVF76KmsC4_v",
			"type": "arrow",
			"x": 1148.4301889574504,
			"y": 25.65974675488217,
			"width": 174.51354449312657,
			"height": 88.14394018065454,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 995443678,
			"version": 431,
			"versionNonce": 1734681154,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-174.51354449312657,
					-88.14394018065454
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "XX1-p-wZ9ShifT7BBDFgT",
				"focus": -0.6059151327939889,
				"gap": 7.880651057459769
			},
			"endBinding": {
				"elementId": "_4wI_A9SzzJl70oDRG0sG",
				"focus": 0.9230499195898787,
				"gap": 4.540411199861381
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "p6oKew7V6cNqzKJ8KSIWd",
			"type": "arrow",
			"x": 1118.446012089525,
			"y": -275.8551187794509,
			"width": 18.91637852563349,
			"height": 1.1482111842559561,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 174004866,
			"version": 81,
			"versionNonce": 111581918,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					18.91637852563349,
					-1.1482111842559561
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "Z13lv2a-a5CEhu-qenZZU",
			"type": "arrow",
			"x": 962.4133147837301,
			"y": -61.08214308212112,
			"width": 5.200722059916984,
			"height": 138.54795308969952,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1070155806,
			"version": 160,
			"versionNonce": 281774594,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					5.200722059916984,
					138.54795308969952
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.6590640178047816,
				"gap": 4.032540452854482,
				"elementId": "_4wI_A9SzzJl70oDRG0sG"
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "qr3JZsuSLzsjRxUeQAcLc",
			"type": "ellipse",
			"x": 967.664266621334,
			"y": -76.77296421691835,
			"width": 149.05342577909914,
			"height": 102.87649027092425,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 950895746,
			"version": 91,
			"versionNonce": 1527484190,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 1386,
			"versionNonce": 1485765058,
			"isDeleted": true,
			"id": "wH91IT4-Q0BWpDgCrUfl5",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 954.7012342796828,
			"y": 83.70675895111253,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 284098142,
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
					"id": "AxnaVf403JPmSR84fqToW",
					"type": "arrow"
				},
				{
					"id": "Z13lv2a-a5CEhu-qenZZU",
					"type": "arrow"
				},
				{
					"id": "lxU_jCJlWVVF76KmsC4_v",
					"type": "arrow"
				}
			],
			"updated": 1717149798859,
			"link": null,
			"locked": false
		},
		{
			"id": "FsCkwv2nC3e3HffI242D-",
			"type": "arrow",
			"x": 967.491512528049,
			"y": -176.86922980324164,
			"width": 7.345618264055361,
			"height": 84.98878384621446,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 824542914,
			"version": 90,
			"versionNonce": 1638719390,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					5.712566422049008,
					26.192687484043176
				],
				[
					-0.8812924818965939,
					84.98878384621446
				],
				[
					6.464325782158767,
					75.15815441008374
				]
			],
			"lastCommittedPoint": [
				6.464325782158767,
				75.15815441008374
			],
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "text",
			"version": 1186,
			"versionNonce": 1128063390,
			"isDeleted": true,
			"id": "34eaoDrr",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1057.482190934973,
			"y": 206.50753268439786,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 71.83992004394531,
			"height": 25,
			"seed": 1412938398,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": null,
			"updated": 1717149798859,
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
			"id": "2aBCz234",
			"type": "text",
			"x": 1145.7894611210727,
			"y": 108.87131546939705,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 2081933470,
			"version": 13,
			"versionNonce": 581631454,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798859,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "XX1-p-wZ9ShifT7BBDFgT",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "TtbdCxIoQPCWehlZ0lW10",
			"type": "arrow",
			"x": 709.6217515089628,
			"y": -862.5842413129394,
			"width": 522.3867457752481,
			"height": 266.9786859533551,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 66975710,
			"version": 654,
			"versionNonce": 1622629954,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-522.3867457752481,
					266.9786859533551
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "RYp-EEzpOavrDwGIrQyPx",
				"focus": -0.20770276285749173,
				"gap": 4.552842980994864
			},
			"endBinding": {
				"elementId": "9zzWG2Utdy4nWmzpT5P-G",
				"focus": -0.17746502609916703,
				"gap": 1
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "rHQUf6Al",
			"type": "text",
			"x": 402.32789876911113,
			"y": -501.6101131992525,
			"width": 14,
			"height": 33.6,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 918928734,
			"version": 80,
			"versionNonce": 1615475970,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 28,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "xNDghdFcVxmdoFRyGqdZy",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "w5uhPDY-z11dMDpUoBse7",
			"type": "arrow",
			"x": 466.5492702428221,
			"y": -642.9583204730932,
			"width": 53.548727016069506,
			"height": 74.90992101011,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 1,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 236290078,
			"version": 69,
			"versionNonce": 1214321694,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-16.777433341819233,
					0.9124516978611155
				],
				[
					36.77129367425027,
					25.680811696652086
				],
				[
					-6.129413975250827,
					74.90992101011
				]
			],
			"lastCommittedPoint": [
				-6.129413975250827,
				74.90992101011
			],
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1645,
			"versionNonce": 161800286,
			"isDeleted": true,
			"id": "fsvmOJ2L7oPSe6deJhPlA",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 547.6073627146625,
			"y": -212.31371564190124,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 296723486,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "AyNBJlGL_R_mQA8u8smPh",
					"type": "arrow"
				},
				{
					"id": "ZemFeu4Xl-oCVMIB4QTL_",
					"type": "arrow"
				},
				{
					"id": "rJ5LKxBVaq5UZYBCFA-nR",
					"type": "arrow"
				}
			],
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "9nOaMPD0Y3auFu-XxWbQn",
			"type": "arrow",
			"x": 564.8853234209371,
			"y": -30.811099561244546,
			"width": 130.5733259167398,
			"height": 52.269561994408946,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1763111134,
			"version": 1029,
			"versionNonce": 2071926046,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					130.5733259167398,
					52.269561994408946
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"focus": 0.9250467060055977,
				"gap": 7.308555253140373,
				"elementId": "lqAi5nchTJIgg-KFL0A_n"
			},
			"endBinding": {
				"focus": 0.20065116390305393,
				"gap": 5.110491982949286,
				"elementId": "qm7ken_hLnb4T9vaxYHR_"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "dG3H3dfYNfW6OfCFAJ8wi",
			"type": "arrow",
			"x": -49.69606651533172,
			"y": -876.7385477744124,
			"width": 417.25141769308186,
			"height": 221.89787256530735,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
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
			"seed": 1430877790,
			"version": 76,
			"versionNonce": 863430046,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					417.25141769308186,
					-221.89787256530735
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "UsW5ojpr_WUW1Nj-TqfLU",
				"focus": 0.47853130748976097,
				"gap": 4.640667238557967
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "1WB9Cq4TX4M5qfRQm-_IA",
			"type": "arrow",
			"x": -51.6552657475396,
			"y": -873.8805210596391,
			"width": 98.77444871255341,
			"height": 54.13660727198953,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffffff",
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
			"seed": 1733608834,
			"version": 133,
			"versionNonce": 269110082,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					98.77444871255341,
					54.13660727198953
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "UsW5ojpr_WUW1Nj-TqfLU",
				"focus": -0.6093896602256615,
				"gap": 2.6814680063500873
			},
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "uT2HDHQs-tX40s8pBueQ-",
			"type": "arrow",
			"x": 340.2930872067868,
			"y": -790.2342600727418,
			"width": 10.828335076189774,
			"height": 19.04876864812843,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
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
			"seed": 1702322626,
			"version": 116,
			"versionNonce": 84181470,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-1.0502457481940155,
					-18.70052978352271
				],
				[
					-10.828335076189774,
					-19.04876864812843
				]
			],
			"lastCommittedPoint": [
				-10.828335076189774,
				-19.04876864812843
			],
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 1048,
			"versionNonce": 1125422622,
			"isDeleted": true,
			"id": "1hYKUwIR3Gv2VBBODuJiv",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 125.04055506428307,
			"y": -885.158579488878,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1975288642,
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
					"id": "JGGBpnvIHxMNL_53clQGe",
					"type": "arrow"
				},
				{
					"id": "FOo7N305vZiNikONA4Qjn",
					"type": "arrow"
				},
				{
					"id": "MkiVn8NVjOyXjrXFlAuKZ",
					"type": "arrow"
				},
				{
					"id": "HunhiqjujnA0Cvir1j55r",
					"type": "arrow"
				}
			],
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "0bSiUtis",
			"type": "text",
			"x": 122.35680735540501,
			"y": -924.2814344314851,
			"width": 18.015975952148438,
			"height": 20,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 2000105374,
			"version": 915,
			"versionNonce": 381543106,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"text": "f6",
			"rawText": "f6",
			"fontSize": 16,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "f6",
			"lineHeight": 1.25
		},
		{
			"type": "ellipse",
			"version": 1610,
			"versionNonce": 647504478,
			"isDeleted": true,
			"id": "_dMu1uWRhq2_ueVMAa9Ur",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 124.80648832031056,
			"y": -819.1520261858199,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1426369630,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "MkiVn8NVjOyXjrXFlAuKZ",
					"type": "arrow"
				},
				{
					"id": "HunhiqjujnA0Cvir1j55r",
					"type": "arrow"
				}
			],
			"updated": 1717149798860,
			"link": null,
			"locked": false
		},
		{
			"id": "HunhiqjujnA0Cvir1j55r",
			"type": "arrow",
			"x": 132.19352543652755,
			"y": -861.0822370192986,
			"width": 0.7074907770474113,
			"height": 35.56463569558923,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1455935618,
			"version": 323,
			"versionNonce": 1211644546,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.7074907770474113,
					35.56463569558923
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "rz6JwCeh",
			"type": "text",
			"x": 406.4495853142773,
			"y": -979.5785838985722,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1470412446,
			"version": 7,
			"versionNonce": 463274846,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798860,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "o7WIzY222B3DLP8rEgQGI",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "s3MmFIX2",
			"type": "text",
			"x": -36.81294251740741,
			"y": -929.4169779095977,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#ffec99",
			"backgroundColor": "#ffc9c9",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1725665410,
			"version": 13,
			"versionNonce": 1515460738,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "ZFH6uf1cDyE4sWEjQ4Jks",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "AyNBJlGL_R_mQA8u8smPh",
			"type": "arrow",
			"x": 554.1838823704255,
			"y": -192.85561071689702,
			"width": 1.8237341902550952,
			"height": 132.74891572105355,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1341728798,
			"version": 244,
			"versionNonce": 48479746,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-1.8237341902550952,
					132.74891572105355
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": {
				"focus": -0.2963981398657619,
				"gap": 6.7282280924336,
				"elementId": "lqAi5nchTJIgg-KFL0A_n"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "niGrUHir5Hikmj0LYAy1A",
			"type": "rectangle",
			"x": 558.6676291663708,
			"y": -610.1746026011419,
			"width": 22.391210346608318,
			"height": 39.20886987679478,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff0f6",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1450464734,
			"version": 58,
			"versionNonce": 1181328770,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false
		},
		{
			"id": "sHDQ0Sczk7-YcR4fPOxWO",
			"type": "arrow",
			"x": 1178.3437278143151,
			"y": 48.05827114762218,
			"width": 2.9666163031688484,
			"height": 103.03199159068839,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 177032322,
			"version": 253,
			"versionNonce": 275900638,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798861,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					2.9666163031688484,
					103.03199159068839
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "SLYc1V2n",
				"focus": 0.011754852385764044,
				"gap": 3.4561094844114564
			},
			"endBinding": {
				"elementId": "XX1-p-wZ9ShifT7BBDFgT",
				"focus": 0.6459505003163191,
				"gap": 15.193613124711012
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "DUU1lvhC",
			"type": "text",
			"x": 1454.1742243002827,
			"y": -323.0180503300709,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1502642526,
			"version": 7,
			"versionNonce": 1641876226,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
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
			"id": "KC6j_KTBpi80sWYlAJ-XM",
			"type": "arrow",
			"x": 366.43598418875223,
			"y": -253.19129154944187,
			"width": 174.5197757684395,
			"height": 45.31278889609527,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1128875202,
			"version": 226,
			"versionNonce": 1356730946,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					174.5197757684395,
					45.31278889609527
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "OLT5_2FPwHlBh50a3oIHz",
				"focus": 0.26778576149704025,
				"gap": 2.1376993876007617
			},
			"endBinding": {
				"elementId": "fsvmOJ2L7oPSe6deJhPlA",
				"focus": 0.08626734209395598,
				"gap": 7.400212492332695
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "bNSm4BM7PcvlbucxqLz1s",
			"type": "arrow",
			"x": 368.7635534655913,
			"y": -214.27273798343606,
			"width": 12.64842290560307,
			"height": 116.14691286486524,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1514768130,
			"version": 412,
			"versionNonce": 832020254,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-12.64842290560307,
					22.493121689728014
				],
				[
					-9.80448423658055,
					116.14691286486524
				]
			],
			"lastCommittedPoint": [
				1.9586796625475245,
				77.32701077370484
			],
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"type": "ellipse",
			"version": 2273,
			"versionNonce": 210495938,
			"isDeleted": true,
			"id": "XkJ5oGCYT_Jfb20LUbW13",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 349.1536581563985,
			"y": -91.168156926439,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#b2f2bb",
			"width": 30,
			"height": 48,
			"seed": 868891906,
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
					"id": "oiPiBhQTRYyK2_oDRG6i9",
					"type": "arrow"
				},
				{
					"id": "yZwOXdytHbGG_lFk15QX9",
					"type": "arrow"
				},
				{
					"id": "bNSm4BM7PcvlbucxqLz1s",
					"type": "arrow"
				},
				{
					"id": "TRhVQAh0v9l3CQ-7Cs5X-",
					"type": "arrow"
				}
			],
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "0todDxuU",
			"type": "text",
			"x": 359.0470564386003,
			"y": -79.13871967491613,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 993622302,
			"version": 8,
			"versionNonce": 1104284510,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "XkJ5oGCYT_Jfb20LUbW13",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"type": "ellipse",
			"version": 1703,
			"versionNonce": 826925378,
			"isDeleted": true,
			"id": "9zzWG2Utdy4nWmzpT5P-G",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -138.0958061187246,
			"y": -416.3621548647774,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 496289730,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "lNDhcH7iijdFRwLzL4eac",
					"type": "arrow"
				},
				{
					"id": "y5nPt_8MzR_qd2sXK16B6",
					"type": "arrow"
				},
				{
					"id": "MkiVn8NVjOyXjrXFlAuKZ",
					"type": "arrow"
				}
			],
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "lNDhcH7iijdFRwLzL4eac",
			"type": "arrow",
			"x": -128.6094743509957,
			"y": -392.9650148284179,
			"width": 3.232162889063389,
			"height": 109.9550883515576,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1596701534,
			"version": 2807,
			"versionNonce": 1236356062,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					3.232162889063389,
					109.9550883515576
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": {
				"focus": -0.09228224350507584,
				"gap": 4.426739634851167,
				"elementId": "oHQWfooWOQvkARmpmZA5c"
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "5khXiS09",
			"type": "text",
			"x": 104.52981344092336,
			"y": -273.8360583204395,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 482915650,
			"version": 7,
			"versionNonce": 412387266,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "h-TiBTxid9PwY51JBqnqR",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "c3nHX144Qx9o_fGh_vCg_",
			"type": "line",
			"x": 194.38284678573814,
			"y": -78.7998604477732,
			"width": 37.96667899560623,
			"height": 71.40021258576803,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1813622494,
			"version": 91,
			"versionNonce": 1508230914,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-14.2072836539827,
					1.0798358309089053
				],
				[
					18.758050440571992,
					57.77888496077696
				],
				[
					23.75939534162353,
					71.40021258576803
				]
			],
			"lastCommittedPoint": [
				23.75939534162353,
				71.40021258576803
			],
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": null
		},
		{
			"id": "pN0arhcZ",
			"type": "text",
			"x": -28.33203248243649,
			"y": 14.858757732524303,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1997497730,
			"version": 6,
			"versionNonce": 691891842,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "meTWS8CpeIefOc67CXI7_",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "ZioNORdsXfOaGK0H2omio",
			"type": "ellipse",
			"x": 114.39861593311139,
			"y": 26.382464312169077,
			"width": 22.28232666954773,
			"height": 25.75782835890402,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 2005118722,
			"version": 85,
			"versionNonce": 1112559170,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false
		},
		{
			"id": "UZYDrUJD",
			"type": "text",
			"x": 360.58596167199494,
			"y": 219.18438220786402,
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
			"seed": 1745148418,
			"version": 3,
			"versionNonce": 1710824834,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798862,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "dQVkeRRCYdEk0xMLYJajx",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "gQnrhXxa",
			"type": "text",
			"x": 560.0009866949135,
			"y": 96.58142708593508,
			"width": 10,
			"height": 24,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 522382430,
			"version": 5,
			"versionNonce": 790967490,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "QsIEUz1VbyV8hJocvWF3q",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"type": "ellipse",
			"version": 2192,
			"versionNonce": 810314818,
			"isDeleted": true,
			"id": "_4wI_A9SzzJl70oDRG0sG",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1372.0779010032263,
			"y": 487.10266899454155,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#a5d8ff",
			"width": 18.588353769911237,
			"height": 18.82755635288754,
			"seed": 1057948190,
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
					"id": "d6G8qaH01KZ3LYTyi_2YS",
					"type": "arrow"
				},
				{
					"id": "JbEM3rRHJCBkirdGQDdtX",
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
					"id": "IEfK0rRvKF3O7lJwWHsft",
					"type": "arrow"
				},
				{
					"id": "zsyLfTfDCCiKwNkGoAwjQ",
					"type": "arrow"
				},
				{
					"id": "V4Cuoruw16eQwCd_N9YqJ",
					"type": "arrow"
				},
				{
					"id": "LAgLHP6B5WIRPXj2JRuOu",
					"type": "arrow"
				}
			],
			"updated": 1717149798863,
			"link": null,
			"locked": false
		},
		{
			"id": "hyw4Po15",
			"type": "text",
			"x": 461.5690438383265,
			"y": 194.52007462215334,
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
			"seed": 1869117634,
			"version": 3,
			"versionNonce": 1930360222,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "PapDiQqadOgIEatOlF0As",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "2HE4MLQJpHyrREkm8P4sK",
			"type": "line",
			"x": 436.9158387860755,
			"y": 209.29709161214862,
			"width": 63.53993391173344,
			"height": 50.47004124823502,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#e7f5ff",
			"fillStyle": "solid",
			"strokeWidth": 0.5,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1919388290,
			"version": 65,
			"versionNonce": 1102789442,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0.2299800733721895,
					5.214124581906731
				],
				[
					-28.219469149487622,
					8.146851647261201
				],
				[
					35.32046476224582,
					50.47004124823502
				]
			],
			"lastCommittedPoint": [
				35.32046476224582,
				50.47004124823502
			],
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": null
		},
		{
			"id": "5DmZcKfZOg2RftodudQlp",
			"type": "rectangle",
			"x": -323.49571257874857,
			"y": -181.73154993162717,
			"width": 3.186763631757117,
			"height": 9.24307596404708,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#fff9db",
			"fillStyle": "solid",
			"strokeWidth": 2,
			"strokeStyle": "dashed",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 388578370,
			"version": 12,
			"versionNonce": 1257669378,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149798863,
			"link": null,
			"locked": false
		},
		{
			"id": "4KVR9ZSS",
			"type": "text",
			"x": 363.33904411218464,
			"y": 243.0920539618509,
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
			"seed": 1600401346,
			"version": 4,
			"versionNonce": 582026974,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149797194,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 4,
			"textAlign": "center",
			"verticalAlign": "middle",
			"containerId": "cQtSb3Cbij0yY_HQwplnK",
			"originalText": "",
			"lineHeight": 1.2
		},
		{
			"id": "AbXaaLVaGy1Bn8bWNDhFj",
			"type": "arrow",
			"x": 334.4707797368116,
			"y": -1438.8114050872077,
			"width": 123.24601929579615,
			"height": 41.848460972862085,
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
			"roundness": {
				"type": 2
			},
			"seed": 934580162,
			"version": 42,
			"versionNonce": 1571331550,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149933688,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-123.24601929579615,
					41.848460972862085
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "fTZNc9Xj",
				"focus": -0.524605608630911,
				"gap": 3.6266664189340645
			},
			"endBinding": {
				"elementId": "QCOWxQzG",
				"focus": -1.0178694219127344,
				"gap": 3.8893398796305974
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "A6ZEVxnl4TUzQmd50bsPT",
			"type": "arrow",
			"x": 339.75370497856915,
			"y": -1436.0953789797193,
			"width": 14.419265648653663,
			"height": 39.197691365559194,
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
			"roundness": {
				"type": 2
			},
			"seed": 1950371806,
			"version": 51,
			"versionNonce": 1566328834,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1717149932371,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					14.419265648653663,
					39.197691365559194
				]
			],
			"lastCommittedPoint": null,
			"startBinding": {
				"elementId": "fTZNc9Xj",
				"focus": 0.1453203302442203,
				"gap": 6.342692526422525
			},
			"endBinding": {
				"elementId": "K8xkmHkN",
				"focus": 0.15928966820204501,
				"gap": 8.6199587886058
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		}
	],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "#fff9db",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 0.5,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 4,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 78.17168853708455,
		"scrollY": 617.3526811396019,
		"zoom": {
			"value": 1.1543351662797612
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