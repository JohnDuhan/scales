/*
  objects that contain an array of scales for each instrument in circle of 5ths order. when transposing instrument called, array index is + or - accordingly.

  variables within each object to allow for note duration?
  */
//major scales
  var scaleArr = [
    ['c/0','d/0','e/0','f/0','g/0','a/0','b/0','c/1','b/0','a/0','g/0','f/0','e/0','d/0','c/0'],
    ['g/0','a/0','b/0','c/1','d/1','e/1','f#/1','g/1','f#/1','e/1','d/1','c/1','b/0','a/0','g/0'],
    ['d/0','e/0','f#/0','g/0','a/0','b/0','c#/1','d/1','c#/1','b/0','a/0','g/0','f#/0','e/0','d/0'],
    ['a/0','b/0','c#/1','d/1','e/1','f#/1','g#/1','a/1','g#/1','f#/1','e/1','d/1','c#/1','b/0','a/0'],
    ['e/0','f#/0','g#/0','a/0','b/0','c#/1','d#/1','e/1','d#/1','c#/1','b/0','a/0','g#/0','f#/0','e/0'],
    ['b/0','c#/1','d#/1','e/1','f#/1','g#/1','a#/1','b/1','a#/1','g#/1','f#/1','e/1','d#/1','c#/1','b/0'],
    ['cb/0','db/0','eb/0','fb/0','gb/0','ab/0','bb/0','cb/1','bb/0','ab/0','gb/0','fb/0','eb/0','db/0','cb/0'],
    ['f#/0','g#/0','a#/0','b#/0','c#/1','d#/1','e#/1','f#/1','e#/1','d#/1','c#/1','b#/0','a#/0','g#/0','f#/0'],
    ['gb/0','ab/0','bb/0','cb/1','db/1','eb/1','f/1','gb/1','f/1','eb/1','db/1','cb/1','bb/0','ab/0','gb/0'],
    ['c#/0','d#/0','e#/0','f#/0','g#/0','a#/0','b#/0','c#/1','b#/0','a#/0','g#/0','f#/0','e#/0','d#/0','c#/0'],
    ['db/0','eb/0','f/0','gb/0','ab/0','bb/0','c/1','db/1','c/1','bb/0','ab/0','gb/0','f/0','eb/0','db/0'],
    ['ab/0','bb/0','c/1','db/1','eb/1','f/1','g/1','ab/1','g/1','f/1','eb/1','db/1','c/1','bb/0','ab/0'],
    ['eb/0','f/0','g/0','ab/0','bb/0','c/1','d/1','eb/1','d/1','c/1','bb/0','ab/0','g/0','f/0','eb/0'],
    ['bb/0','c/1','d/1','eb/1','f/1','g/1','a/1','bb/1','a/1','g/1','f/1','eb/1','d/1','c/1','bb/0'],
    ['f/0','g/0','a/0','bb/0','c/1','d/1','e/1','f/1','e/1','d/1','c/1','bb/0','a/0','g/0','f/0']
    ];

//chromatic scales - ensemble segments (2 8va, concert F)
var ensChromScalesArr = [
  ['flute',['f/4','f#/4','g/4','g#/4','a/4','ab/4','g/4','gb/4','f/4'],['a/4','a#/4','b/4','c/5','db/5','c/5','b/4','bb/4','a/4'],['c#/5','d/5','d#/5','e/5','f/5','e/5','eb/5','d/5','db/5'],['f/5','f#/5','g/5','g#/5','a/5','ab/5','g/5','gb/5','f/5'],['a/5','a#/5','b/5','c/6','db/6','c/6','b/5','bb/5','a/5'],['c#/6','d/6','d#/6','e/6','f/6','e/6','eb/6','d/6','db/6']],
  ['oboe',['f/4','f#/4','g/4','g#/4','a/4','ab/4','g/4','gb/4','f/4'],['a/4','a#/4','b/4','c/5','db/5','c/5','b/4','bb/4','a/4'],['c#/5','d/5','d#/5','e/5','f/5','e/5','eb/5','d/5','db/5'],['f/5','f#/5','g/5','g#/5','a/5','ab/5','g/5','gb/5','f/5'],['a/5','a#/5','b/5','c/6','db/6','c/6','b/5','bb/5','a/5'],['c#/6','d/6','d#/6','e/6','f/6','e/6','eb/6','d/6','db/6']],
  ['bassoon',['f/2','f#/2','g/2','g#/2','a/2','ab/2','g/2','gb/2','f/2'],['a/2','a#/2','b/2','c/3','db/3','c/3','b/2','bb/2','a/2'],['c#/3','d/3','d#/3','e/3','f/3','e/3','eb/3','d/3','db/3'],['f/3','f#/3','g/3','g#/3','a/3','ab/3','g/3','gb/3','f/3'],['a/3','a#/3','b/3','c/4','db/4','c/4','b/3','bb/3','a/3'],['c#/4','d/4','d#/4','e/4','f/4','e/4','eb/4','d/4','db/4']],
  ['clarinet',['g/3','g#/3','a/3','a#/3','b/3','bb/3','a/3','ab/3','g/3'],['b/3','c/4','c#/4','d/4','eb/4','d/4','db/4','c/4','b/3'],['d#/4','e/4','f/4','f#/4','g/4','gb/4','f/4','e/4','eb/4'],['g/4','g#/4','a/4','a#/4','b/4','bb/4','a/4','ab/4','g/4'],['b/4','c/5','c#/5','d/5','eb/5','d/5','db/5','c/5','b/4'],['d#/5','e/5','f/5','f#/5','g/5','gb/5','f/5','e/5','eb/5']],
  ['bassclar',['g/3','g#/3','a/3','a#/3','b/3','bb/3','a/3','ab/3','g/3'],['b/3','c/4','c#/4','d/4','eb/4','d/4','db/4','c/4','b/3'],['d#/4','e/4','f/4','f#/4','g/4','gb/4','f/4','e/4','eb/4'],['g/4','g#/4','a/4','a#/4','b/4','bb/4','a/4','ab/4','g/4'],['b/4','c/5','c#/5','d/5','eb/5','d/5','db/5','c/5','b/4'],['d#/5','e/5','f/5','f#/5','g/5','gb/5','f/5','e/5','eb/5']],
  ['altosax',['d/4','d#/4','e/4','f/4','gb/4','f/4','e/4','eb/4','d/4'],['f#/4','g/4','g#/4','a/4','bb/4','a/4','ab/4','g/4','gb/4'],['a#/4','b/4','c/5','c#/5','d/5','db/5','c/5','b/4','bb/4'],['d/5','d#/5','e/5','f/5','gb/5','f/5','e/5','eb/5','d/5'],['f#/5','g/5','g#/5','a/5','bb/5','a/5','ab/5','g/5','gb/5'],['a#/5','b/5','c/6','c#/6','d/6','db/6','c/6','b/5','bb/5']],
  ['tensax',['g/4','g#/4','a/4','a#/4','b/4','bb/4','a/4','ab/4','g/4'],['b/3','c/4','c#/4','d/4','eb/4','d/4','db/4','c/4','b/3'],['d#/4','e/4','f/4','f#/4','g/4','gb/4','f/4','e/4','eb/4'],['g/4','g#/4','a/4','a#/4','b/4','bb/4','a/4','ab/4','g/4'],['b/4','c/5','c#/5','d/5','eb/5','d/5','db/5','c/5','b/4'],['d#/5','e/5','f/5','f#/5','g/5','gb/5','f/5','e/5','eb/5']],
  ['barisax',['d/4','d#/4','e/4','f/4','gb/4','f/4','e/4','eb/4','d/4'],['f#/4','g/4','g#/4','a/4','bb/4','a/4','ab/4','g/4','gb/4'],['a#/4','b/4','c/5','c#/5','d/5','db/5','c/5','b/4','bb/4'],['d/5','d#/5','e/5','f/5','gb/5','f/5','e/5','eb/5','d/5'],['f#/5','g/5','g#/5','a/5','bb/5','a/5','ab/5','g/5','gb/5'],['a#/5','b/5','c/6','c#/6','d/6','db/6','c/6','b/5','bb/5']],
  ['trumpet',['g/3','g#/3','a/3','a#/3','b/3','bb/3','a/3','ab/3','g/3'],['b/3','c/4','c#/4','d/4','eb/4','d/4','db/4','c/4','b/3'],['d#/4','e/4','f/4','f#/4','g/4','gb/4','f/4','e/4','eb/4'],['g/4','g#/4','a/4','a#/4','b/4','bb/4','a/4','ab/4','g/4'],['b/4','c/5','c#/5','d/5','eb/5','d/5','db/5','c/5','b/4'],['d#/5','e/5','f/5','f#/5','g/5','gb/5','f/5','e/5','eb/5']],
  ['horn',['c/4','c#/4','d/4','d#/4','e/4','eb/4','d/4','db/4','c/4'],['e/4','f/4','f#/4','g/4','ab/4','g/4','gb/4','f/4','e/4'],['g#/4','a/4','a#/4','b/4','c/5','b/4','bb/4','a/4','ab/4'],['c/5','c#/5','d/5','d#/5','e/5','eb/5','d/5','db/5','c/5'],['e/5','f/5','f#/5','g/5','ab/5','g/5','gb/5','f/5','e/5'],['g#/4','a/4','a#/4','b/4','c/5','b/4','bb/4','a/4','ab/4']],
  ['trombone',['f/2','f#/2','g/2','g#/2','a/2','ab/2','g/2','gb/2','f/2'],['a/2','a#/2','b/2','c/3','db/3','c/3','b/2','bb/2','a/2'],['c#/3','d/3','d#/3','e/3','f/3','e/3','eb/3','d/3','db/3'],['f/3','f#/3','g/3','g#/3','a/3','ab/3','g/3','gb/3','f/3'],['a/3','a#/3','b/3','c/4','db/4','c/4','b/3','bb/3','a/3'],['c#/4','d/4','d#/4','e/4','f/4','e/4','eb/4','d/4','db/4']],
  ['euphonium',['f/2','f#/2','g/2','g#/2','a/2','ab/2','g/2','gb/2','f/2'],['a/2','a#/2','b/2','c/3','db/3','c/3','b/2','bb/2','a/2'],['c#/3','d/3','d#/3','e/3','f/3','e/3','eb/3','d/3','db/3'],['f/3','f#/3','g/3','g#/3','a/3','ab/3','g/3','gb/3','f/3'],['a/3','a#/3','b/3','c/4','db/4','c/4','b/3','bb/3','a/3'],['c#/4','d/4','d#/4','e/4','f/4','e/4','eb/4','d/4','db/4']],
  ['tuba',['f/1','f#/1','g/1','g#/1','a/1','ab/1','g/1','gb/1','f/1'],['a/1','a#/1','b/1','c/2','db/2','c/2','b/1','bb/1','a/1'],['c#/2','d/2','d#/2','e/2','f/2','e/2','eb/2','d/2','db/2'],['f/2','f#/2','g/2','g#/2','a/2','ab/2','g/2','gb/2','f/2'],['a/2','a#/2','b/2','c/3','db/3','c/3','b/2','bb/2','a/2'],['c#/3','d/3','d#/3','e/3','f/3','e/3','eb/3','d/3','db/3']],
  ['mallets']
]

var indChromScalesArr = [
  ['flute',['c/4','c#/4','d/4','d#/4','e/4','eb/4','d/4','db/4','c/4'],['e/4','f/4','f#/4','g/4','ab/4','g/4','gb/4','f/4','e/4'],['g#/4','a/4','a#/4','b/4','c/5','b/4','bb/4','a/4','ab/4'],['c/5','c#/5','d/5','d#/5','e/5','eb/5','d/5','db/5','c/5'],['e/5','f/5','f#/5','g/5','ab/5','g/5','gb/5','f/5','e/5'],['g#/5','a/5','a#/5','b/5','c/6','b/5','bb/5','a/5','ab/5'],['c/6','c#/6','d/6','d#/6','e/6','eb/6','d/6','db/6','c/6'],['e/6','f/6','f#/6','g/6','ab/6','g/6','gb/6','f/6','e/6']],
  ['oboe',['c/4','c#/4','d/4','d#/4','e/4','eb/4','d/4','db/4','c/4'],['e/4','f/4','f#/4','g/4','ab/4','g/4','gb/4','f/4','e/4'],['g#/4','a/4','a#/4','b/4','c/5','b/4','bb/4','a/4','ab/4'],['c/5','c#/5','d/5','d#/5','e/5','eb/5','d/5','db/5','c/5'],['e/5','f/5','f#/5','g/5','ab/5','g/5','gb/5','f/5','e/5'],['g#/5','a/5','a#/5','b/5','c/6','b/5','bb/5','a/5','ab/5']],
  ['altosax',['a#/3','b/3','c/4','c#/4','d/4','db/4','c/4','b/3','bb/3'],['d/4','d#/4','e/4','f/4','gb/4','f/4','e/4','eb/4','d/4'],['f#/4','g/4','g#/4','a/4','bb/4','a/4','ab/4','g/4','gb/4'],['a#/4','b/4','c/5','c#/5','d/5','db/5','c/5','b/4','bb/4'],['d/5','d#/5','e/5','f/5','gb/5','f/5','e/5','eb/5','d/5'],['f#/5','g/5','g#/5','a/5','bb/5','a/5','ab/5','g/5','gb/5'],['a#/5','b/5','c/6','c#/6','d/6','db/6','c/6','b/5','bb/5']],
  ['tensax',['a#/3','b/3','c/4','c#/4','d/4','db/4','c/4','b/3','bb/3'],['d/4','d#/4','e/4','f/4','gb/4','f/4','e/4','eb/4','d/4'],['f#/4','g/4','g#/4','a/4','bb/4','a/4','ab/4','g/4','gb/4'],['a#/4','b/4','c/5','c#/5','d/5','db/5','c/5','b/4','bb/4'],['d/5','d#/5','e/5','f/5','gb/5','f/5','e/5','eb/5','d/5'],['f#/5','g/5','g#/5','a/5','bb/5','a/5','ab/5','g/5','gb/5'],['a#/5','b/5','c/6','c#/6','d/6','db/6','c/6','b/5','bb/5']],
  ['clarinet',['e/3','f/3','f#/3','g/3','ab/3','g/3','gb/3','f/3','e/3'],['g#/3','a/3','a#/3','b/3','c/4','b/3','bb/3','a/3','ab/3'],['c/4','c#/4','d/4','d#/4','e/4','eb/4','d/4','db/4','c/4'],['e/4','f/4','f#/4','g/4','ab/4','g/4','gb/4','f/4','e/4'],['b/4','c/5','c#/5','d/5','eb/5','d/5','db/5','c/5','b/4'],['d#/5','e/5','f/5','f#/5','g/5','gb/5','f/5','e/5','eb/5'],['g/5','g#/5','a/5','a#/5','b/5','bb/5','a/5','ab/5','g/5'],['b/5','c/6','c#/6','d/6','eb/6','d/6','db/6','c/6','b/5']],
  ['trumpet',['g/3','g#/3','a/3','a#/3','b/3','bb/3','a/3','ab/3','g/3'],['b/3','c/4','c#/4','d/4','eb/4','d/4','db/4','c/4','b/3'],['d#/4','e/4','f/4','f#/4','g/4','gb/4','f/4','e/4','eb/4'],['g/4','g#/4','a/4','a#/4','b/4','bb/4','a/4','ab/4','g/4'],['b/4','c/5','c#/5','d/5','eb/5','d/5','db/5','c/5','b/4'],['d#/5','e/5','f/5','f#/5','g/5','gb/5','f/5','e/5','eb/5']],
  ['horn',['f/3','f#/3','g/3','g#/3','a/3','ab/3','g/3','gb/3','f/3'],['a/3','a#/3','b/3','c/4','db/4','c/4','b/3','bb/3','a/3'],['c#/4','d/4','d#/4','e/4','f/4','e/4','eb/4','d/4','db/4'],['f/4','f#/4','g/4','g#/4','a/4','ab/4','g/4','gb/4','f/4'],['a/4','a#/4','b/4','c/5','db/5','c/5','b/4','bb/4','a/4'],['c#/5','d/5','d#/5','e/5','f/5','e/5','eb/5','d/5','db/5']],
  ['trombone',['f/2','f#/2','g/2','g#/2','a/2','a#/2','b/2','bb/2','a/2','ab/2','g/2','gb/2','f/2'],['b/2','c/3','c#/3','d/3','d#/3','e/3','f/3','gb/3','f/3','e/3','eb/3','d/3','db/3','c/3','b/2'],['f#/3','g/3','g#/3','a/3','a#/3','b/3','bb/3','a/3','ab/3','g/3','gb/3'],['b/3','c/4','c#/4','d/4','eb/4','d/4','db/4','c/4','b/3'],['d#/4','e/4','f/4','e/4','eb/4']],
  ['euphonium',['f/2','f#/2','g/2','g#/2','a/2','ab/2','g/2','gb/2','f/2'],['a/2','a#/2','b/2','c/3','db/3','c/3','b/2','bb/2','a/2'],['c#/3','d/3','d#/3','e/3','f/3','e/3','eb/3','d/3','db/3'],['f/3','f#/3','g/3','g#/3','a/3','ab/3','g/3','gb/3','f/3'],['a/3','a#/3','b/3','c/4','db/4','c/4','b/3','bb/3','a/3'],['c#/4','d/4','d#/4','e/4','f/4','e/4','eb/4','d/4','db/4']],
  ['tuba',['f/1','f#/1','g/1','g#/1','a/1','ab/1','g/1','gb/1','f/1'],['a/1','a#/1','b/1','c/2','db/2','c/2','b/1','bb/1','a/1'],['c#/2','d/2','d#/2','e/2','f/2','e/2','eb/2','d/2','db/2'],['f/2','f#/2','g/2','g#/2','a/2','ab/2','g/2','gb/2','f/2'],['a/2','a#/2','b/2','c/3','db/3','c/3','b/2','bb/2','a/2'],['c#/3','d/3','d#/3','e/3','f/3','e/3','eb/3','d/3','db/3']]
];


var fingeringsArr = [
    [
    'clarinet?a#/3?1gtMk5U7KY_3AQ94rqxzi-eEe44rYyjlz',
    'clarinet?a#/4?1sUy6M-lxa6ZDpJzwKnqTPPboS2IhTRvP',
    'clarinet?a#/5?1hU3falqNLCahck_qtcfl_TFBgpNY3A1e',
    'clarinet?bb/3?1gtMk5U7KY_3AQ94rqxzi-eEe44rYyjlz',
    'clarinet?bb/4?1sUy6M-lxa6ZDpJzwKnqTPPboS2IhTRvP',
    'clarinet?bb/5?1hU3falqNLCahck_qtcfl_TFBgpNY3A1e',
    'clarinet?a/3?1hUHkzmZhjD8HYkiYHIaxaC29IRDMQAsi',
    'clarinet?a/4?19_vj5Duy8rt1pI9lIjWlXHYWsIOkpMZR',
    'clarinet?a/5?1_C5bFTv2LgYklMHDbBBxPFGs-2BFsIhf',
    'clarinet?b/3?1nV9RDbTg1T00zQkuAIed0Rpq3XxVxipW',
    'clarinet?b/4?1mvp8nkNso1JS1hJLOPdcAFX1UnBznu0M',
    'clarinet?b/5?15U5TvQVs8CA7OBi-DCWrkaIUoNzR-wra',
    'clarinet?db/4?1uJBtQnbjLXp4Th1qvazsYqRGGMG-P-Zh',
    'clarinet?db/5?18DNMnOfW0KIHLOWWqhP2vMiWTGaFECdH',
    'clarinet?db/6?1yBF01XVCaRsTp5BZh3G-b4TKWe7qvSXE',
    'clarinet?c#/4?1uJBtQnbjLXp4Th1qvazsYqRGGMG-P-Zh',
    'clarinet?c#/5?18DNMnOfW0KIHLOWWqhP2vMiWTGaFECdH',
    'clarinet?c#/6?1yBF01XVCaRsTp5BZh3G-b4TKWe7qvSXE',
    'clarinet?c/4?1R8lQa6Xny2jClHV9itxOqYpyJeplcky3',
    'clarinet?c/5?1xAVKzcHYTD1aFpI-sHpEVUb60pi1JZ7A',
    'clarinet?c/6?1NnnCNbrYnx25bwPVobWy3cnn4s4w2p4B',
    'clarinet?eb/4?13x-bUr93lCgDKSRIMLutx3sOEHzChyEt',
    'clarinet?eb/5?1WVCK0AQ0EA2YBDRpvAQmkHWsQnQa4Whf',
    'clarinet?eb/6?1Y_V9iSmEkw3Qf8Gm34L0IWqjLnZ6y4KX',
    'clarinet?d#/4?13x-bUr93lCgDKSRIMLutx3sOEHzChyEt',
    'clarinet?d#/5?1WVCK0AQ0EA2YBDRpvAQmkHWsQnQa4Whf',
    'clarinet?d#/6?1Y_V9iSmEkw3Qf8Gm34L0IWqjLnZ6y4KX',
    'clarinet?d/4?1dwp2sKeL6h5E8780YSmBapn8BUvQcNS4',
    'clarinet?d/5?1h--xesAlFsP0Nac5aQ8oSHFjcSSKp3CJ',
    'clarinet?d/6?1zW31WWnWU6OEsb9anvrKGky1Vz_HM9em',
    'clarinet?e/3?1hEjQLV4Wi6F32Urmmnsta15Be4RP72Gh',
    'clarinet?e/4?19vN9HGro-9JP6b_7JITIpMS7scZ0Oivb',
    'clarinet?e/5?1m7vJTcJx3bPRfOwcpnGyPddY2hvuhM3K',
    'clarinet?e/6?1BXmGhiW6H36VQkXihL5ysDRIBR594jW5',
    'clarinet?gb/3?1-Us5lJIizSSLLt8CX8XxfiVKc1FK1VmB',
    'clarinet?gb/4?1lwzY6WuSWtYmzqXQVmmDwScS7j4C75gq',
    'clarinet?gb/5?1zn5EmB_ByROLd0WR-OMgAtYsXiOo26xB',
    'clarinet?f#/3?1-Us5lJIizSSLLt8CX8XxfiVKc1FK1VmB',
    'clarinet?f#/4?1lwzY6WuSWtYmzqXQVmmDwScS7j4C75gq',
    'clarinet?f#/5?1zn5EmB_ByROLd0WR-OMgAtYsXiOo26xB',
    'clarinet?f/3?1BrZcmHi2foiOvlVB2uDcfcJFA6DsZonT',
    'clarinet?f/4?16T1zwWkun-JJ3xOBPcT-q0uVtN1W4ORK',
    'clarinet?f/5?1KqlWxpCDWdmKh8anP8ehLR1QpA3fZsQy',
    'clarinet?f/6?17AIpxtshqJODIBE7e-niAjKpkE2pGMEB',
    'clarinet?ab/3?1x_zNtgfzNIWOzxbFWbZX07n8jV_ZROoV',
    'clarinet?ab/4?1_nKI2TgxIVOfIk0piC4EyX6Dt9GYUflc',
    'clarinet?ab/5?1feWz4uBeTqpIl7fRzCKH9mEelPHyfWfQ',
    'clarinet?g#/3?1x_zNtgfzNIWOzxbFWbZX07n8jV_ZROoV',
    'clarinet?g#/4?1_nKI2TgxIVOfIk0piC4EyX6Dt9GYUflc',
    'clarinet?g#/5?1feWz4uBeTqpIl7fRzCKH9mEelPHyfWfQ',
    'clarinet?g/3?1RIrHVnY3-zyBfwQhx7PiTbhwGkusS7Vg',
    'clarinet?g/4?1fC0TRyjIn8indSXqwp_ux4zY_Ah9GdqM',
    'clarinet?g/5?1Z5mD7ayZrMEP199g61GvgwGFkWpOK5Cw'
    ]
  ];

const cMajor = [
  // A quarter-note C.
  new StaveNote({
    keys: ['c/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['d/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['e/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['f/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['g/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['a/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['b/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['c/5'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['b/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['a/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['g/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['f/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['e/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['d/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['c/4'],
    duration: 'w'
  })
];

const dMajor = [
  // A quarter-note C.
  new StaveNote({
    keys: ['d/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['e/4'],
    duration: 'w'
  }).addModifier(new Accidental("#"), 0),
  new StaveNote({
    keys: ['f#/4'],
    duration: 'w'
  })
  .addModifier(new Accidental("#"), 0),
  new StaveNote({
    keys: ['g/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['a/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['b/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['c#/5'],
    duration: 'w'
  }).addModifier(new Accidental("#"), 0),
  new StaveNote({
    keys: ['d/5'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['C#/5'],
    duration: 'w'
  }).addModifier(new Accidental("#"), 0),
  new StaveNote({
    keys: ['b/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['a/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['g/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['f#/4'],
    duration: 'w'
  }).addModifier(new Accidental("#"), 0),
  new StaveNote({
    keys: ['e/4'],
    duration: 'w'
  }),
  new StaveNote({
    keys: ['d/4'],
    duration: 'w'
  })
];
