# Tournament

### Objective:

Your task is to create a JavaScript program that processes and displays the results of a football tournament. You will receive a raw input of game results, and your mandate is to develop a meaningful tally output in an organized way.

### Guidelines:

1.  **Structure your input:** The input to your program is a string that looks like:
    
        Allegoric Alaskans;Blithering Badgers;win
        Devastating Donkeys;Courageous Californians;draw
        Devastating Donkeys;Allegoric Alaskans;win
        Courageous Californians;Blithering Badgers;loss
        Blithering Badgers;Devastating Donkeys;loss
        Allegoric Alaskans;Courageous Californians;win
        
    
    Each line represents a game, with the first team listed being the one to which the result pertains. For instance, `Allegoric Alaskans;Blithering Badgers;win` indicates that the Allegoric Alaskans won against the Blithering Badgers. Remember to use these strings for output, as they are comparatively checked for function verification.
    
2.  **Your Output should be a Table Format:** Construct a table where each row features a team and their respective statistics, displaying details in the following order:
    
        Team                           | MP |  W |  D |  L |  P
        Devastating Donkeys            |  3 |  2 |  1 |  0 |  7
        
    
    The abbreviations stand for:
    
    *   MP: Matches Played
    *   W: Matches Won
    *   D: Matches Drawn (Tied)
    *   L: Matches Lost
    *   P: Points
    
    A team earns three points for a win, one point for a draw, and no points for a loss.
    
3.  **Order of output:** Organize your output by points, in descending order. If two or more teams have the same number of points, order them alphabetically. This is crucial for passing the test cases.
    

Challenge:
----------

Think about how you would parse the input data efficiently and keep the tallies for each football team updated. Be mindful of the ordering of the teams when outputting the final tally.
