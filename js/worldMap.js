let nodes = [
    { // 0
        'name': 'DILAPIDATED TEMPLE',
        'type': 'shrine',
        'phase': 1,
        'x': 635,
        'y': 1880
    },
    { // 1
        'name': 'OWL',
        'type': 'encounter_mjr',
        'icon': 'owl.png',
        'phase': 2,
        'x': 289,
        'y': 827,
        'revealed_by': [38]
    },
    { // 2
        'name': 'LADY BUTTERFLY',
        'type': 'encounter_mjr',
        'icon': 'butterfly.png',
        'phase': 1,
        'x': 475,
        'y': 791
    },
    { // 3
        'name': 'AUDIENCE CHAMBER',
        'type': 'shrine',
        'phase': 1,
        'x': 433,
        'y': 1043
    },
    { // 4
        'name': 'GLUTTON',
        'type': 'encounter',
        'phase': 2,
        'x': 257,
        'y': 1050,
        'items': ['bead']
    },
    { // 5
        'name': 'GLUTTON',
        'type': 'encounter',
        'phase': 1,
        'x': 305,
        'y': 1135,
        'items': ['bead']
    },
    { // 6
        'name': 'MAIN HALL',
        'type': 'shrine',
        'phase': 1,
        'x': 160,
        'y': 1200
    },
    { // 7
        'name': 'BAMBOO THICKET SLOPE',
        'type': 'shrine',
        'phase': 1,
        'x': 475,
        'y': 1225
    },
    { // 8
        'name': 'SHADOW',
        'type': 'encounter',
        'phase': 2,
        'x': 605,
        'y': 1200,
        'items': ['bead'],
        'revealed_by': [7]
    },
    { // 9
        'name': 'SPEAR',
        'type': 'encounter',
        'phase': 1,
        'x': 355,
        'y': 1400,
        'items': ['bead']
    },
    { // 10
        'name': 'ESTATE PATH',
        'type': 'shrine',
        'phase': 1,
        'x': 250,
        'y': 1530
    },
    { // 11
        'name': 'DRAGONSPRING HIRATA ESTATE',
        'type': 'shrine',
        'phase': 1,
        'x': 155,
        'y': 1780,
        'revealed_by': [0]
    },
    { // 12
        'name': 'HIDDEN TEMPLE',
        'type': 'shrine',
        'phase': 1,
        'x': 325,
        'y': 603
    },
    { // 13
        'name': 'ASHINA OUTSKIRTS',
        'type': 'shrine',
        'phase': 1,
        'x': 890,
        'y': 1830
    },
    { // 14
        'name': 'OUTSKIRTS WALL GATE PATH',
        'type': 'shrine',
        'phase': 1,
        'x': 1140,
        'y': 1900
    },
    { // 15
        'name': 'SAMURAI',
        'type': 'encounter',
        'phase': 1,
        'x': 1140,
        'y': 1730,
        'items': ['bead', 'seed']
    },
    { // 16
        'name': 'OUTSKIRTS WALL STAIRWAY',
        'type': 'shrine',
        'phase': 1,
        'x': 1109,
        'y': 1511,
        'hidden_by': [102]
    },
    { // 17
        'name': 'DEMON OF HATRED',
        'type': 'encounter_mjr',
        'icon': 'demon.png',
        'phase': 3,
        'x': 650,
        'y': 1575,
        'items': ['2x_azurite']
    },
    { // 18
        'name': 'OGRE',
        'type': 'encounter',
        'phase': 1,
        'x': 935,
        'y': 1437,
        'items': ['bead', 'scroll'],
        'hidden_by': [102]
    },
    { // 19
        'name': 'GLUTTON',
        'type': 'encounter',
        'phase': 3,
        'x': 827,
        'y': 1440,
        'items': ['bead'],
        'revealed_by': [169]
    },
    { // 20
        'name': 'SAMURAI',
        'type': 'encounter',
        'phase': 1,
        'x': 911,
        'y': 1333,
        'items': ['bead'],
        'revealed_by': [18],
        'hidden_by': [102]
    },
    { // 21
        'name': 'UNDERBRIDGE VALLEY',
        'type': 'shrine',
        'phase': 1,
        'x': 697,
        'y': 1307,
        'hidden_by': [102]
    },
    { // 22
        'name': 'ASHINA CASTLE GATE FORTRESS',
        'type': 'shrine',
        'phase': 1,
        'x': 930,
        'y': 1127,
        'hidden_by': [102]
    },
    { // 23
        'name': 'GYOUBU',
        'type': 'encounter_mjr',
        'icon': 'gyoubu.png',
        'phase': 1,
        'x': 773,
        'y': 987,
        'hidden_by': [102]
    },
    { // 24
        'name': 'ASHINA CASTLE GATE',
        'type': 'shrine',
        'phase': 1,
        'x': 953,
        'y': 771,
        'hidden_by': [102]
    },
    { // 25
        'name': 'BULL',
        'type': 'encounter',
        'phase': 1,
        'x': 1083,
        'y': 735,
        'items': ['bead'],
        'hidden_by_and': [151, 152]
    },
    { // 26
        'name': 'ASHINA CASTLE',
        'type': 'shrine',
        'phase': 1,
        'x': 1350,
        'y': 750,
        'hidden_by_and': [151, 152]
    },
    { // 27
        'name': 'SAMURAI',
        'type': 'encounter',
        'phase': 1,
        'x': 1190,
        'y': 810,
        'items': ['bead'],
        'revealed_by': [24],
        'hidden_by_and': [151, 152]
    },
    { // 28
        'name': 'OGRE',
        'type': 'encounter',
        'phase': 2,
        'x': 1215,
        'y': 900,
        'items': ['bead', 'scroll'],
        'revealed_by_and': [154, 151, 152],
        'hidden_by': [102]
    },
    { // 29
        'name': 'NEAR SECRET PASSAGE',
        'type': 'shrine',
        'phase': 1,
        'x': 1000,
        'y': 400
    },
    { // 30
        'name': 'GENICHIRO & ISSHIN, SWORD SAINT',
        'type': 'encounter_mjr_big',
        'icon': 'sword_saint.png',
        'phase': 3,
        'x': 1050,
        'y': 150
    },
    { // 31
        'name': 'UPPER TOWER ANTECHAMBER',
        'type': 'shrine',
        'phase': 1,
        'x': 1490,
        'y': 500,
        'hidden_by_and': [151, 152]
    },
    { // 32
        'name': 'UPPER TOWER ASHINA DOJO',
        'type': 'shrine',
        'phase': 1,
        'x': 1410,
        'y': 240,
        'hidden_by_and': [151, 152]
    },
    { // 33
        'name': 'ELITE',
        'type': 'encounter',
        'phase': 3,
        'x': 1305,
        'y': 155,
        'items': ['bead'],
        'revealed_by': [164]
    },
    { // 34
        'name': 'SHADOW',
        'type': 'encounter',
        'phase': 2,
        'x': 1640,
        'y': 130,
        'items': ['bead'],
        'revealed_by_and': [156, 151, 152],
        'hidden_by': [102]
    },
    { // 35
        'name': 'ELITE',
        'type': 'encounter',
        'phase': 1,
        'x': 1660,
        'y': 237,
        'items': ['bead'],
        'hidden_by_and': [151, 152]
    },
    { // 36
        'name': 'CASTLE TOWER LOOKOUT',
        'type': 'shrine',
        'phase': 1,
        'x': 1920,
        'y': 150,
        'hidden_by_and': [151, 152]
    },
    { // 37
        'name': 'EMMA & ISSHIN ASHINA',
        'type': 'encounter_mjr_big',
        'icon': 'emma_isshin.png',
        'phase': 2,
        'x': 2375,
        'y': 250,
        'revealed_by_and': [159, 151, 152]
    },
    { // 38
        'name': 'OWL',
        'type': 'encounter_mjr',
        'icon': 'owl.png',
        'phase': 2,
        'x': 2110,
        'y': 350,
        'revealed_by_and': [160, 151, 152],
        'hidden_by': [102]
    },
    { // 39
        'name': 'UPPER TOWER KURO\'S ROOM',
        'type': 'shrine',
        'phase': 1,
        'x': 2100,
        'y': 575,
        'hidden_by_and': [151, 152]
    },
    { // 40
        'name': 'OLD GRAVE',
        'type': 'shrine',
        'phase': 1,
        'x': 1220,
        'y': 1170,
        'hidden_by_and': [151, 152]
    },
    { // 41
        'name': 'HEADLESS',
        'type': 'encounter',
        'phase': 1,
        'x': 1325,
        'y': 1100,
        'items': ['ungo'],
        'revealed_by': [26, 40],
        'hidden_by_and': [151, 152]
    },
    { // 42
        'name': 'GREAT SERPENT SHRINE',
        'type': 'shrine',
        'phase': 1,
        'x': 1360,
        'y': 1400,
        'hidden_by_and': [151, 152]
    },
    { // 43
        'name': 'SHADOW',
        'type': 'encounter',
        'phase': 2,
        'x': 1280,
        'y': 1530,
        'items': ['bead'],
        'revealed_by': [162]
    },
    { // 44
        'name': 'UNDER-SHRINE VALLEY',
        'type': 'shrine',
        'phase': 1,
        'x': 1500,
        'y': 1610
    },
    { // 45
        'name': 'HEADLESS',
        'type': 'encounter',
        'phase': 1,
        'x': 1620,
        'y': 1585,
        'items': ['gokan'],
        'revealed_by': [44]
    },
    { // 46
        'name': 'SUNKEN VALLEY',
        'type': 'shrine',
        'phase': 1,
        'x': 1780,
        'y': 1750
    },
    { // 47
        'name': 'SNIPER',
        'type': 'encounter',
        'phase': 1,
        'x': 1585,
        'y': 1800,
        'items': ['bead'],
        'revealed_by': [46]
    },
    { // 48
        'name': 'GUN FORT',
        'type': 'shrine',
        'phase': 1,
        'x': 1450,
        'y': 1910
    },
    { // 49
        'name': 'CENTIPEDE',
        'type': 'encounter', 
        'phase': 1,
        'x': 1637,
        'y': 1931,
        'items': ['bead']
    },
    { // 50
        'name': '',
        'type': 'key',
        'phase': 1,
        'x': 1740,
        'y': 2000
    },
    { // 51
        'name': 'RIVEN CAVE',
        'type': 'shrine',
        'phase': 1,
        'x': 1900,
        'y': 2013,
        'revealed_by_and': [49,  103]
    },
    { // 52
        'name': 'BODHISATTVA VALLEY',
        'type': 'shrine',
        'phase': 1,
        'x': 2090,
        'y': 1887
    },
    { // 53
        'name': 'GUARDIAN APE',
        'type': 'encounter_mjr',
        'icon': 'ape.png',
        'phase': 1,
        'x': 2335,
        'y': 1960,
        'items': ['finger']
    },
    { // 54
        'name': 'GREAT APE\'S WATERING HOLE',
        'type': 'shrine',
        'phase': 1,
        'x': 2585,
        'y': 1995
    },
    { // 55
        'name': 'ABANDONED DUNGEON ENTRANCE',
        'type': 'shrine',
        'phase': 1,
        'x': 1655,
        'y': 755
    },
    { // 56
        'name': 'UNDERGROUND WATERWAY',
        'type': 'shrine',
        'phase': 1,
        'x': 1975,
        'y': 1050
    },
    { // 57
        'name': 'SENPOU TEMPLE MT. KONGO',
        'type': 'shrine',
        'phase': 1,
        'x': 2240,
        'y': 1110
    },
    { // 58
        'name': 'SHUGENDO',
        'type': 'shrine',
        'phase': 1,
        'x': 2490,
        'y': 900
    },
    { // 59
        'name': 'BELL DEMON\'S TEMPLE',
        'type': 'shrine',
        'phase': 1,
        'x': 2170,
        'y': 760,
        'revealed_by': [16]
    },
    { // 60
        'name': 'HEADLESS',
        'type': 'encounter',
        'phase': 1,
        'x': 1975,
        'y': 835,
        'items': ['ako'],
        'revealed_by': [59, 16]
    },
    { // 61
        'name': 'SUNKEN VALLEY CAVERN',
        'type': 'shrine',
        'phase': 1,
        'x': 2650,
        'y': 1100
    },
    { // 62
        'name': 'KNIGHT',
        'type': 'encounter',
        'phase': 1,
        'x': 2550,
        'y': 745,
        'items': ['bead']
    },
    { // 63
        'name': 'TEMPLE GROUNDS',
        'type': 'shrine',
        'phase': 1,
        'x': 2400,
        'y': 650
    },
    { // 64
        'name': 'MAIN HALL',
        'type': 'shrine',
        'phase': 1,
        'x': 2615,
        'y': 550
    },
    { // 65
        'name': 'CENTIPEDE',
        'type': 'encounter',
        'phase': 1,
        'x': 2525,
        'y': 440,
        'items': ['bead'],
        'revealed_by': [63]
    },
    { // 66
        'name': 'MONKEYS',
        'type': 'encounter_mjr',
        'icon': 'monkeys.png',
        'phase': 1,
        'x': 2825,
        'y': 400
    },
    { // 67
        'name': 'INNER SANCTUM',
        'type': 'shrine',
        'phase': 1,
        'x': 2850,
        'y': 185
    },
    { // 68
        'name': 'ASHINA RESERVOIR',
        'type': 'shrine',
        'phase': 1,
        'x': 1467,
        'y': 988,
        'hidden_by_and': [151, 152]
    },
    { // 69 (lol)
        'name': 'SPEAR',
        'type': 'encounter',
        'phase': 1,
        'x': 1580,
        'y': 925,
        'items': ['bead'],
        'revealed_by': [26, 68, 71],
        'hidden_by_and': [151, 152]
    },
    { // 70
        'name': 'SPEAR & SAMURAI',
        'type': 'encounter',
        'phase': 3,
        'x': 1300,
        'y': 500,
        'items': ['bead'],
        'revealed_by': [168]
    },
    { // 71
        'name': 'SHADOW',
        'type': 'encounter',
        'phase': 1,
        'x': 1630,
        'y': 1205,
        'items': ['bead']
    },
    { // 72
        'name': 'BOTTOMLESS HOLE',
        'type': 'shrine',
        'phase': 1,
        'x': 1725,
        'y': 1325
    },
    { // 73
        'name': 'SHICHIMEN',
        'type': 'encounter',
        'phase': 1,
        'x': 1877,
        'y': 1246,
        'items': ['tanto'],
        'revealed_by': [72]
    },
    { // 74
        'name': 'ASHINA DEPTHS',
        'type': 'shrine',
        'phase': 1,
        'x': 1870,
        'y': 1530
    },
    { // 75
        'name': 'POISON POOL',
        'type': 'shrine',
        'phase': 1,
        'x': 2150,
        'y': 1600
    },
    { // 76
        'name': 'SNIPER',
        'type': 'encounter',
        'phase': 1,
        'x': 2300,
        'y': 1520,
        'items': ['bead']
    },
    { // 77
        'name': 'DUAL APES',
        'type': 'encounter_mjr',
        'icon': 'apes.png',
        'phase': 1,
        'x': 2400,
        'y': 1375,
        'items': ['bead', 'bead'],
        'revealed_by_and': [53, 76]
    },
    { // 78
        'name': 'SHICHIMEN',
        'type': 'encounter',
        'phase': 1,
        'x': 2540,
        'y': 1365,
        'items': ['malcontent'],
        'revealed_by': [77]
    },
    { // 79
        'name': 'HIDDEN FOREST',
        'type': 'shrine',
        'phase': 1,
        'x': 2735,
        'y': 1340
    },
    { // 80
        'name': 'HEADLESS',
        'type': 'encounter',
        'phase': 1,
        'x': 2837,
        'y': 1420,
        'items': ['gaichiin'],
        'revealed_by': [79]
    },
    { // 81
        'name': 'GLUTTON',
        'type': 'encounter',
        'phase': 1,
        'x': 2750,
        'y': 1485,
        'items': ['bead'],
        'revealed_by': [79]
    },
    { // 82
        'name': 'NOBLE',
        'type': 'encounter',
        'phase': 1,
        'x': 2575,
        'y': 1535
    },
    { // 83
        'name': 'MIBU VILLAGE',
        'type': 'shrine',
        'phase': 1,
        'x': 2470,
        'y': 1630
    },
    { // 84
        'name': 'WATER MILL',
        'type': 'shrine',
        'phase': 1,
        'x': 2755,
        'y': 1805
    },
    { // 85
        'name': 'O\'RIN',
        'type': 'encounter',
        'phase': 1,
        'x': 2830,
        'y': 1725,
        'items': ['bead', 'scroll'],
        'revealed_by': [84]
    },
    { // 86
        'name': 'CORRUPTED MONK',
        'type': 'encounter_mjr',
        'icon': 'monk.png',
        'phase': 1,
        'x': 2941,
        'y': 1890
    },
    { // 87
        'name': 'WEDDING CAVE ENTRANCE',
        'type': 'shrine',
        'phase': 1,
        'x': 3160,
        'y': 2010
    },
    { // 88
        'name': 'FOUNTAINHEAD PALACE',
        'type': 'shrine',
        'phase': 2,
        'x': 3595,
        'y': 1980,
        'revealed_by': [153]
    },
    { // 89
        'name': 'TRUE MONK',
        'type': 'encounter_mjr',
        'icon': 'monk.png',
        'phase': 2,
        'x': 3325,
        'y': 1795
    },
    { // 90
        'name': 'VERMILLION BRIDGE',
        'type': 'shrine',
        'phase': 2,
        'x': 3550,
        'y': 1585
    },
    { // 91
        'name': 'MIBU MANOR',
        'type': 'shrine',
        'phase': 2,
        'x': 3095,
        'y': 1570
    },
    { // 92
        'name': 'BULL',
        'type': 'encounter',
        'phase': 2,
        'x': 3045,
        'y': 1354,
        'items': ['bead'],
        'revealed_by': [91, 93]
    },
    { // 93
        'name': 'FLOWER VIEWING STAGE',
        'type': 'shrine',
        'phase': 2,
        'x': 3135,
        'y': 1210
    },
    { // 94
        'name': 'GREAT SAKURA',
        'type': 'shrine',
        'phase': 2,
        'x': 3590,
        'y': 1211
    },
    { // 95
        'name': 'HEADLESS',
        'type': 'encounter',
        'phase': 2,
        'x': 3325,
        'y': 1465,
        'items': ['yashi'],
        'revealed_by': [96]
    },
    { // 96
        'name': 'OKAMI',
        'type': 'encounter',
        'phase': 2,
        'x': 3675,
        'y': 1310,
        'items': ['bead'],
        'revealed_by': [91, 94] // you see the okami from anywhere in the area
    },
    { // 97
        'name': 'SHICHIMEN',
        'type': 'encounter',
        'phase': 2,
        'x': 3370,
        'y': 975,
        'items': ['azurite'],
        'revealed_by': [94]
    },
    { // 98
        'name': 'PALACE GROUNDS',
        'type': 'shrine',
        'phase': 2,
        'x': 3380,
        'y': 837
    },
    { // 99
        'name': 'NEAR POT NOBLE',
        'type': 'shrine',
        'phase': 2,
        'x': 3136,
        'y': 1010
    },
    { // 100
        'name': 'FEEDING GROUNDS',
        'type': 'shrine',
        'phase': 2,
        'x': 3695,
        'y': 975
    },
    { // 101
        'name': 'SANCTUARY',
        'type': 'shrine',
        'phase': 2,
        'x': 3670,
        'y': 655
    },
    { // 102
        'name': 'DIVINE DRAGON',
        'type': 'encounter_mjr',
        'icon': 'dragon.png',
        'phase': 2,
        'x': 3350,
        'y': 570,
        'revealed_by': [101]
    },
    { // 103
        'name': 'GENICHIRO ASHINA', // missed it earlier
        'type': 'encounter_mjr',
        'icon': 'genichiro.png',
        'phase': 1,
        'x': 1940,
        'y': 440,
        'items': ['key'],
        'hidden_by_and': [151, 152]
    },
    { // 104
        'type': 'item',
        'phase': 1,
        'x': 545,
        'y': 1078,
        'items': ['bead_hug'],
        'revealed_by': [3]
    },
    { // 105
        'type': 'item',
        'phase': 1,
        'x': 283,
        'y': 1351,
        'items': ['feather'],
        'revealed_by': [9]
    },
    { // 106
        'type': 'item',
        'phase': 1,
        'x': 463,
        'y': 1451,
        'items': ['axe'],
        'revealed_by': [10]
    },
    { // 107
        'type': 'item',
        'phase': 1,
        'x': 393,
        'y': 1541,
        'items': ['fire'],
        'revealed_by': [10]
    },
    { // 108
        'type': 'item',
        'phase': 1,
        'x': 317,
        'y': 1669,
        'items': ['mask_7'],
        'revealed_by': [11]
    },
    { // 109
        'type': 'merchant',
        'phase': 1,
        'x': 719,
        'y': 1989,
        'revealed_by': [12]
    },
    { // 110
        'type': 'item',
        'phase': 1,
        'x': 771,
        'y': 2055,
        'items': ['seed_2k']
    },
    { // 111
        'type': 'item',
        'phase': 1,
        'x': 1237,
        'y': 1783,
        'items': ['shuriken'],
        'revealed_by': [15]
    },
    { // 112
        'type': 'merchant',
        'phase': 1,
        'x': 1087,
        'y': 1665,
        'revealed_by': [15]
    },
    { // 113
        'type': 'item',
        'phase': 1,
        'x': 979,
        'y': 1649,
        'items': ['cracker_500'],
        'hidden_by': [119]
    },
    { // 114
        'type': 'merchant',
        'phase': 1,
        'x': 990,
        'y': 1513,
        'revealed_by': [16],
        'hidden_by': [102]
    },
    { // 115
        'type': 'item',
        'phase': 1,
        'x': 887,
        'y': 1487,
        'items': ['seed'],
        'revealed_by': [18],
        'hidden_by': [102]
    },
    { // 116
        'type': 'item',
        'phase': 1,
        'x': 939,
        'y': 885,
        'items': ['bead_indoor'],
        'revealed_by': [23],
        'hidden_by': [102]
    },
    { // 117
        'type': 'item',
        'phase': 1,
        'x': 1005,
        'y': 873,
        'items': ['scroll'],
        'revealed_by': [23],
        'hidden_by': [102]
    },
    { // 118
        'type': 'merchant',
        'phase': 1,
        'x': 825,
        'y': 767,
        'revealed_by': [23],
        'hidden_by': [102]
    },
    { // 119
        'type': 'item',
        'phase': 1,
        'x': 854,
        'y': 647,
        'items': ['cracker_500'],
        'hidden_by': [113]
    },
    { // 120
        'type': 'item',
        'phase': 1,
        'x': 762,
        'y': 677,
        'items': ['seed_1k']
    },
    { // 121
        'type': 'item',
        'phase': 1,
        'x': 1450,
        'y': 810,
        'items': ['sabimaru'],
        'revealed_by': [26],
        'hidden_by_and': [151, 152]
    },
    { // 122
        'type': 'item',
        'phase': 1,
        'x': 1357,
        'y': 979,
        'items': ['spear'],
        'revealed_by': [26],
        'hidden_by_and': [151, 152]
    },
    { // 123
        'type': 'merchant',
        'phase': 1,
        'x': 1175,
        'y': 1285,
        'revealed_by': [40],
        'hidden_by_and': [151, 152]
    },
    { // 124
        'type': 'item',
        'phase': 1,
        'x': 1131,
        'y': 1333,
        'items': ['fan_1600'],
        'hidden_by_and': [151, 152]
    },
    { // 125
        'type': 'item',
        'phase': 1,
        'x': 1207,
        'y': 1341,
        'items': ['scroll_1200'],
        'hidden_by_and': [151, 152]
    },
    { // 126
        'type': 'item',
        'phase': 1,
        'x': 1573,
        'y': 1685,
        'items': ['bead'],
        'revealed_by': [44]
    },
    { // 127
        'type': 'item',
        'phase': 1,
        'x': 1695,
        'y': 1675,
        'items': ['seed'],
        'revealed_by': [44]
    },
    { // 128
        'type': 'item',
        'phase': 1,
        'x': 1573,
        'y': 2015,
        'items': ['bead'],
        'revealed_by': [48]
    },
    { // 129
        'type': 'item',
        'phase': 1,
        'x': 1627,
        'y': 2065,
        'items': ['fan'],
        'revealed_by': [49]
    },
    { // 130
        'type': 'merchant',
        'phase': 1,
        'x': 2113,
        'y': 1997,
        'revealed_by': [52]
    },
    { // 131
        'type': 'item',
        'phase': 1,
        'x': 2155,
        'y': 1769,
        'items': ['snake_dry'],
        'revealed_by': [52]
    },
    { // 132
        'type': 'item',
        'phase': 1,
        'x': 2253,
        'y': 1625,
        'items': ['bead_statue'],
        'revealed_by': [75]
    },
    { // 133
        'type': 'merchant',
        'phase': 1,
        'x': 2419,
        'y': 1731,
        'revealed_by': [83]
    },
    { // 134
        'type': 'item',
        'phase': 1,
        'x': 2527,
        'y': 1733,
        'items': ['bead_submerged'],
        'revealed_by': [83]
    },
    { // 135
        'type': 'item',
        'phase': 1,
        'x': 2663,
        'y': 1657,
        'items': ['seed_tree'],
        'revealed_by': [83]
    },
    { // 136
        'type': 'item',
        'phase': 1,
        'x': 2785,
        'y': 1913,
        'items': ['bead_indoor'],
        'revealed_by': [84]
    },
    { // 137
        'type': 'item',
        'phase': 2,
        'x': 3205,
        'y': 1389,
        'items': ['bead_submerged'],
        'revealed_by': [96]
    },
    { // 138
        'type': 'item',
        'phase': 2,
        'x': 3440,
        'y': 730,
        'items': ['seed_indoor'],
        'revealed_by': [98]
    },
    { // 139
        'type': 'item',
        'phase': 2,
        'x': 3050,
        'y': 907,
        'items': ['2az_6ea'],
        'revealed_by': [99]
    },
    { // 140
        'type': 'item',
        'phase': 2,
        'x': 3025,
        'y': 1025,
        'items': ['mask_12'],
        'revealed_by': [99]
    },
    { // 141
        'type': 'item',
        'phase': 1,
        'x': 1413,
        'y': 490,
        'items': ['bead_hug'],
        'revealed_by': [31],
        'hidden_by_and': [151, 152]
    },
    { // 142
        'type': 'item',
        'phase': 1,
        'x': 1600,
        'y': 520,
        'items': ['seed'],
        'revealed_by': [31],
        'hidden_by_and': [151, 152]
    },
    { // 143
        'type': 'merchant',
        'phase': 1,
        'x': 1763,
        'y': 750,
        'revealed_by': [55, 56]
    },
    { // 144
        'type': 'item',
        'phase': 1,
        'x': 1867,
        'y': 668,
        'items': ['mask_5k']
    },
    { // 145
        'type': 'item',
        'phase': 1,
        'x': 1787,
        'y': 656,
        'items': ['bead_1400']
    },
    { // 146
        'type': 'item',
        'phase': 1,
        'x': 2387,
        'y': 1044,
        'items': ['seed_indoor'],
        'revealed_by': [57]
    },
    { // 147
        'type': 'merchant',
        'phase': 1,
        'x': 2589,
        'y': 884,
        'revealed_by': [58]
    },
    { // 148
        'type': 'item',
        'phase': 1,
        'x': 2639,
        'y': 1214,
        'items': ['snake_fresh'],
        'revealed_by': [61]
    },
    { // 149
        'type': 'item',
        'phase': 1,
        'x': 2335,
        'y': 550,
        'items': ['bead_submerged'],
        'revealed_by': [63]
    },
    { // 150
        'type': 'item',
        'phase': 1,
        'x': 2700,
        'y': 640,
        'items': ['scroll'],
        'revealed_by': [64]
    },
    { // 151
        'type': 'item',
        'phase': 1,
        'x': 2710,
        'y': 2010,
        'items': ['palace_lotus'],
        'revealed_by': [53, 54]
    },
    { // 152
        'type': 'item',
        'phase': 1,
        'x': 3300,
        'y': 2050,
        'items': ['shelter_stone'],
        'revealed_by': [87]
    },
    { // 153
        'type': 'item',
        'phase': 1,
        'x': 2200,
        'y': 575,
        'items': ['fountainhead_incense'],
        'revealed_by_and': [38, 158, 152, 151],
        'hidden_by': [102]
    },
    { // 154
        'name': 'ASHINA CASTLE',
        'type': 'shrine',
        'phase': 2,
        'x': 1350,
        'y': 750,
        'revealed_by_and': [55, 151, 152],
        'hidden_by': [102]
    },
    { // 155
        'name': 'UPPER TOWER ANTECHAMBER',
        'type': 'shrine',
        'phase': 2,
        'x': 1490,
        'y': 500,
        'revealed_by_and': [154, 151, 152],
        'hidden_by': [102]
    },
    { // 156
        'name': 'UPPER TOWER ASHINA DOJO',
        'type': 'shrine',
        'phase': 2,
        'x': 1410,
        'y': 240,
        'revealed_by_and': [155, 151, 152],
        'hidden_by': [102]
    },
    { // 157
        'name': 'CASTLE TOWER LOOKOUT',
        'type': 'shrine',
        'phase': 2,
        'x': 1920,
        'y': 150,
        'revealed_by_and': [34, 151, 152],
        'hidden_by': [102]
    },
    { // 158
        'name': 'UPPER TOWER KURO\'S ROOM',
        'type': 'shrine',
        'phase': 2,
        'x': 2100,
        'y': 575,
        'revealed_by_and': [38, 151, 152]
    },
    { // 159
        'type': 'choice_obey',
        'phase': 2,
        'x': 2175,
        'y': 100,
        'revealed_by_and': [151, 152, 157],
        'hidden_by': [160, 102]
    },
    { // 160
        'type': 'choice_break',
        'phase': 2,
        'x': 2100,
        'y': 225,
        'revealed_by_and': [151, 152, 157],
        'hidden_by': [159, 102]
    },
    { // 161
        'name': 'OLD GRAVE',
        'type': 'shrine',
        'phase': 2,
        'x': 1220,
        'y': 1170,
        'revealed_by_and': [154, 151, 152]
    },
    { // 162
        'name': 'GREAT SERPENT SHRINE',
        'type': 'shrine',
        'phase': 2,
        'x': 1360,
        'y': 1400,
        'revealed_by_and': [161, 151, 152]
    },
    { // 163
        'name': 'ASHINA RESERVOIR',
        'type': 'shrine',
        'phase': 2,
        'x': 1467,
        'y': 988,
        'revealed_by_and': [154, 151, 152],
        'hidden_by': [102]
    },
    { // 164
        'name': 'UPPER TOWER ASHINA DOJO',
        'type': 'shrine',
        'phase': 3,
        'x': 1410,
        'y': 240,
        'revealed_by_and': [102, 165]
    },
    { // 165
        'name': 'CASTLE TOWER LOOKOUT',
        'type': 'shrine',
        'phase': 3,
        'x': 1920,
        'y': 150,
        'revealed_by_and': [102, 158]
    },
    { // 166
        'name': 'UPPER TOWER ANTECHAMBER',
        'type': 'shrine',
        'phase': 3,
        'x': 1490,
        'y': 500,
        'revealed_by_and': [102, 164]
    },
    { // 167
        'name': 'ASHINA CASTLE',
        'type': 'shrine',
        'phase': 3,
        'x': 1350,
        'y': 750,
        'revealed_by_and': [102, 166]
    },
    { // 168
        'name': 'ASHINA RESERVOIR',
        'type': 'shrine',
        'phase': 3,
        'x': 1175,
        'y': 550,
        'revealed_by_and': [102, 167]
    },
    { // 169
        'name': 'UNDERBRIDGE VALLEY',
        'type': 'shrine',
        'phase': 3,
        'x': 697,
        'y': 1307
    },
    { // 170
        'name': 'OUTSKIRTS WALL STAIRWAY',
        'type': 'shrine',
        'phase': 1,
        'x': 1109,
        'y': 1511
    },
    { // 171
        'name': 'FLAMES OF HATRED',
        'type': 'shrine',
        'phase': 3,
        'x': 875,
        'y': 1600
    },
    
];

// types (t): 0=2-way, 1=1-way, 2=2-way(dashed)
let connections = [
    [{'t': 2, id: 11}, {'t': 0, id: 13}], // 0
    [{'t': 0, id: 3}], // 1
    [{'t': 0, id: 3}], // 2
    [{'t': 0, id: 4}, {'t': 0, id: 5}], // 3
    [{'t': 0, id: 6}], // 4
    [{'t': 0, id: 6}], // 5
    [{'t': 0, id: 7}], // 6
    [{'t': 0, id: 9}], // 7
    [], // 8
    [{'t': 0, id: 10}], // 9
    [{'t': 0, id: 11}], // 10
    [], // 11
    [{'t': 0, id: 1}, {'t': 0, id: 2}], // 12
    [{'t': 0, id: 14}], // 13
    [{'t': 0, id: 15}], // 14
    [{'t': 0, id: 16}], // 15
    [{'t': 0, id: 18}, {'t': 2, id: 59}], // 16
    [], // 17
    [{'t': 0, id: 21}], // 18
    [], // 19
    [], // 20
    [{'t': 0, id: 22}], // 21
    [{'t': 0, id: 23}], // 22
    [{'t': 0, id: 24}], // 23
    [{'t': 0, id: 25}], // 24
    [{'t': 0, id: 26}], // 25
    [{'t': 0, id: 31}, {'t': 0, id: 55}, {'t': 0, id: 68}, {'t': 0, id: 40}], // 26
    [], // 27
    [], // 28
    [], // 29
    [{'t': 0, id: 29}], // 30
    [{'t': 0, id: 32}, {'t': 0, id: 36}], // 31
    [{'t': 0, id: 35}], // 32
    [], // 33
    [{'t': 0, id: 156}], // 34
    [{'t': 0, id: 36}], // 35
    [{'t': 0, id: 103}], // 36
    [], // 37
    [], // 38
    [{'t': 0, id: 103}], // 39
    [{'t': 0, id: 42}], // 40
    [], // 41
    [{'t': 0, id: 44}], // 42
    [], // 43
    [{'t': 0, id: 46}], // 44
    [], // 45
    [{'t': 0, id: 48}], // 46
    [], // 47
    [{'t': 0, id: 49}], // 48
    [{'t': 0, id: 50}], // 49
    [{'t': 0, id: 51}], // 50
    [{'t': 0, id: 52}], // 51
    [{'t': 1, id: 75}, {'t': 0, id: 53}], // 52
    [{'t': 0, id: 54}], // 53
    [], // 54
    [{'t': 0, id: 56}], // 55
    [{'t': 0, id: 57}], // 56
    [{'t': 0, id: 58}], // 57
    [{'t': 0, id: 59}, {'t': 0, id: 62}, {'t': 0, id: 61}], // 58
    [], // 59
    [], // 60
    [], // 61
    [{'t': 0, id: 63}], // 62
    [{'t': 0, id: 64}], // 63
    [{'t': 0, id: 66}], // 64
    [], // 65
    [{'t': 0, id: 67}], // 66
    [], // 67
    [{'t': 0, id: 71}], // 68
    [], // 69
    [], // 70
    [{'t': 0, id: 72}], // 71
    [{'t': 1, id: 56}, {'t': 0, id: 74}], // 72
    [], // 73
    [{'t': 0, id: 75}], // 74
    [{'t': 0, id: 76}], // 75
    [{'t': 0, id: 79}], // 76
    [], // 77
    [], // 78
    [{'t': 0, id: 82}], // 79
    [], // 80
    [], // 81
    [{'t': 0, id: 83}], // 82
    [{'t': 0, id: 84}], // 83
    [{'t': 0, id: 86}], // 84
    [], // 85
    [{'t': 0, id: 87}], // 86
    [{'t': 2, id: 88}], // 87
    [{'t': 0, id: 89}], // 88
    [{'t': 0, id: 90}], // 89
    [{'t': 0, id: 91}], // 90
    [{'t': 0, id: 93}], // 91
    [], // 92
    [{'t': 0, id: 94}], // 93
    [{'t': 0, id: 98}, {'t': 0, id: 99}], // 94
    [], // 95
    [], // 96
    [], // 97
    [{'t': 0, id: 99}, {'t': 0, id: 100}, {'t': 0, id: 101}], // 98
    [], // 99
    [{'t': 0, id: 101}], // 100
    [{'t': 2, id: 102}], // 101
    [], // 102
    [], // 103
    [], // 104
    [], // 105
    [], // 106
    [], // 107
    [], // 108
    [{'t': 0, id: 110}], // 109
    [], // 110
    [], // 111
    [{'t': 0, id: 113}], // 112
    [], // 113
    [], // 114
    [], // 115
    [], // 116
    [], // 117
    [{'t': 0, id: 119}, {'t': 0, id: 120}], // 118
    [], // 119
    [], // 120
    [], // 121
    [], // 122
    [{'t': 0, id: 124}, {'t': 0, id: 125}], // 123
    [], // 124
    [], // 125
    [], // 126
    [], // 127
    [], // 128
    [], // 129
    [], // 130
    [], // 131
    [], // 132
    [], // 133
    [], // 134
    [], // 135
    [], // 136
    [], // 137
    [], // 138
    [], // 139
    [], // 140
    [], // 141
    [], // 142
    [{'t': 0, id: 144}, {'t': 0, id: 145}], // 143
    [], // 144
    [], // 145
    [], // 146
    [], // 147
    [], // 148
    [], // 149
    [], // 150
    [], // 151
    [], // 152
    [], // 153
    [{'t': 0, id: 55}], // 154
    [{'t': 0, id: 154}], // 155
    [{'t': 0, id: 155}], // 156
    [{'t': 0, id: 34}], // 157
    [{'t': 0, id: 38}], // 158
    [{'t': 0, id: 157}, {'t': 0, id: 37}], // 159
    [{'t': 0, id: 157}, {'t': 0, id: 38}], // 160
    [{'t': 0, id: 42}, {'t': 0, id: 154}, {'t': 0, id: 167}, {'t': 0, id: 162}], // 161
    [{'t': 0, id: 161}, {'t': 0, id: 44}], // 162
    [{'t': 0, id: 154}, {'t': 0, id: 71}], // 163
    [], // 164
    [{'t': 0, id: 158}, {'t': 0, id: 164}], // 165
    [{'t': 0, id: 164}], // 166
    [{'t': 0, id: 166}], // 167
    [{'t': 0, id: 29}], // 168
    [{'t': 0, id: 161}], // 169
    [{'t': 0, id: 169},  {'t': 2, id: 59}], // 170
    [{'t': 0, id: 170}, {'t': 0, id: 17}], // 171
];

let discovered = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
];

let index = {
    'Ashina Outskirts': [24, 22, 21, 16, 14, 13, 0],
    'Ashina Castle': [39, 36, 32, 31, 26, 40, 68, 29, 55, 42],
    'Abandoned Dungeon': [72, 56],
    'Senpou Temple, Mt. Kongo': [67, 64, 63, 58, 59, 61, 57],
    'Sunken Valley': [44, 46, 48, 51, 52, 54],
    'Ashina Depths': [74, 75, 79, 83, 84, 87],
    'Fountainhead Palace': [88, 90, 91, 93, 94, 98, 99, 100, 101],
    'Hirata Estate': [11, 10, 7, 6, 3, 12]
};