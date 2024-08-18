import { RpgPlayer, RpgPlayerHooks, Control, Components } from '@rpgjs/server'

const naked = ['lavender-fem-body', 'lavender-fem-head',  'lavender-elven-ears', 'blue-eyes', 'lavender-nose-straight', 'purple-thin-eyebrows', 'purple-bangs-fem'];

const clothes = [
{name:'naked', clothes:[]},
{name: 'default', clothes:['teal-kimono-fem']},
{name: 'everyday', clothes:['red-skirt-fem','red-vneckshirt-fem']},
{name: 'colorclash', clothes: ['red-skirt-fem', 'green-vneckshirt-fem']},
{name: 'glamourdress', clothes: ['red-tie-slit-fem']},
{name: 'sexyblack', clothes:['black-bodice-fem']}]

const extras = ['bowtie2-black'];
let outfitNumber = 1;


function changeOutfit(outfitNumber: number) {
     }

const player: RpgPlayerHooks = {
   
     
   onConnected(player: RpgPlayer) {
        player.name = 'Kimi'
        player.setComponentsTop(Components.text('{name}'))
	player.setGraphic(naked.concat(clothes[outfitNumber].clothes.flat()).concat(extras.flat()));
	
        //player.setGraphic(graphics);
    },
    onInput(player: RpgPlayer, { input }) {
        if (input == Control.Back) {
	   player.callMainMenu()
        }

        if (input === Control.Attack) {
	 outfitNumber = outfitNumber === 0 ? 0 : outfitNumber -1;
	const outfit = naked.concat(clothes[outfitNumber].clothes.flat()).concat(extras.flat());
	   player.setGraphic(outfit);
	   player.showAnimation(outfit, 'skill', true);	
        }

        if (input === Control.Skill) {
	   outfitNumber = outfitNumber === clothes.length -1 ? clothes.length-1 : outfitNumber +1;
	   const outfit = naked.concat(clothes[outfitNumber].clothes.flat()).concat(extras.flat());
	   player.setGraphic(outfit);
	   player.showAnimation(outfit, 'skill', true);	
        }
    },
    async onJoinMap(player: RpgPlayer) {
    }
}

export default player
