/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
        let master = 800;
        let basics = 500;
        
        if (knowsProgramming) {
            return Math.ceil(master/config[focus]);
        }
        else {
            return Math.ceil((master + basics)/config[focus]);
        }
  };
  