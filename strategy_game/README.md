# Strategy Game
I am thinking like general.io kind of troop building game

## Plan

1. plan out classes and how game will be structured.
    -
2. plan modules to work on

## Flush Out Game Idea

Map is a grid.  regular tiles, obsticle tiles, player/enemy base tile (that increases troop count every tick), towns (that increases troop count every tick).
- game class
  DATA:
    -  map
    -  AIPlayer
  FUNCTIONS:
    -  render()
    -  tick()
    -  handleUserCommand(cmd[[x,y],[x,y]])
    -  handleAICommand()
      -  .AIPlayer.move()

  - has map
  - handles player and AI commands/moves

- AI class
  DATA:

  FUNCTIONS:
    -  move()  returns the move[[x,y],[x,y]]
    -  findValidMoves()
      -returns an array of valid moves
    -  determineBestMove()
      -  look through valid moves array for the best


- map class
  - a grid of tiles
  DATA:
  - tiles [[],[],[]]
  - future_moves_ queue = []
  FUNCTIONS:
  - render() - renders all tiles
  - handleTick() - handles 1 game turn: adds 1 army to cities, handle troop movement (moving, and fighting),
  - handleMove(start tile, end tile) -
    - append move [] into futrue_moves_quque
- tile class
  DATA:
   - color
   - passable = true/false
   - city = true/false
   - army =
  FUNCTIONS:
  - render()
  - handleTick()
  - Sub classes:
    - field
    - town
    - base
    - tree


