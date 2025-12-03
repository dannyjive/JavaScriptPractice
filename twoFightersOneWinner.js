//Giving us two objects and a firstAttacker

function declareWinner(fighter1, fighter2, firstAttacker) {

    //Decide who the attacker is with a turnery operator
    let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
    //Decide who the defender is the same way
    let defender = attacker === fighter1 ? fighter2 : fighter1;
  
    //Loop through the attack
  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= attacker.damagePerAttack;
    
    if (defender.health <= 0) {
      return attacker.name;
    }
    
    [attacker, defender] = [defender, attacker];
  }
}