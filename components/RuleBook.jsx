import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { P, H1, H2, H3, Strong, Li, Br } from './HTMLElements'

const screen = Dimensions.get('window')
const rulesWindow = { 
  width: screen.width / 1.4,
  height: screen.height - 30
}

const styles = StyleSheet.create({
  rulesBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10
  },
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.7)', 
    position:'absolute', 
    width: '100%', 
    height: '100%'
  },
  rules: {
    backgroundColor: 'white',
    width: rulesWindow.width,
    height: rulesWindow.height,
    position: 'absolute',
    top: screen.height / 2,
    left: screen.width / 2,
    transform: [
      { translateX: -rulesWindow.width / 2 }, 
      { translateY: -rulesWindow.height / 2 }
    ]
  },
  rulesBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%'
  }
})

const RuleBook = () => {
  const [showRuleBook, setShowRuleBook] = useState(false)

  return ( 
    <>
    <Pressable style={styles.rulesBtn} onPress={() => setShowRuleBook(true)}>
      <Image source={require('../assets/infobulle.png')}/>
    </Pressable>
    <Modal 
      visible={showRuleBook}
      animationType="slide"
      transparent={true}
      onRequestClose={() => setShowRuleBook(false)}
    >
      <View style={styles.modalBackground}>
        <View style={styles.rules}>
          <ImageBackground source={require('../assets/backgrounds/bg-empty.jpg')} style={styles.rulesBackground}>
            <ScrollView>
              <H1 alignCenter>But du jeu</H1>
              <P alignCenter>
              Parcourez le Donjon dans le but de vaincre les MONSTRES et le BOSS pour accomplir votre destinée et devenir le nouveau champion.
              </P>

              <H1 alignCenter>A lire avant de commencer</H1>
              <P alignCenter>
              Jouer à ce jeu constitue une activité physique et sportive, vous devez adapter la difficulté du jeu aux participant(e)s et vous référer aux recommandations à la fin des règles. Les participant(e)s peuvent organiser leur effort comme ils le souhaitent, sauf en cas de BASTON ou de contre la montre.
              </P>

              <H1 alignCenter>Mise en place</H1>
              <P>
                Elle est déjà faite sur cette application !
                Vous trouverez sur chaque tapis de jeu :
                <Li>
                  - Un paquet "Donjon". Constitué d'une quantité de cartes qui correspond au nombre de rounds indiqué avant la partie. Tapez dessus pour piocher une rencontre. C'est un paquet individuel, qui vous a été attribué au hasard parmi toutes les cartes que comprend le jeu DUNGEON OF FITNESS et son extension PUMPING HORDES. Lors de la répartition des cartes, tous les joueurs les ont piochées depuis le même paquet. Ainsi, l'application respecte la quantité d'exemplaires contenus dans le jeu de base.
                </Li>
                <Li>
                  Un paquet "Objets". C'est en tapant ici que vous piocherez des objets après avoir vaincu vos rencontres. C'est un paquet commun, ce qui signifie que chaque carte que vous piochez ne pourra plus être piochée par vos allié(e)s ou adversaires (sauf s'il en existe plusieurs exemplaires dans la decklist d'origine).
                </Li>
                <Li>
                  Un paquet "Rencontres". C'est ici qu'atterissent les rencontres que vous piochez. C'est la carte que vous devez affronter / résoudre pour ce round.
                </Li>
                <Li>
                  Un paquet "Main". C'est votre inventaire. Ici seront contenues vos deux cartes initiales qui pourront être des armes et des améliorations. Vous ne pourrez avoir plus de 7 cartes à la fois dans votre main. 
                  A n'importe quel moment durant la partie, vous pouvez défausser toute votre main pour piocher deux nouvelles cartes dans le paquet "Objets". Vous ne pouvez effectuer cette action qu'une seule fois par partie.
                </Li>
              </P>
              <P alignCenter>
                <Strong fontSize="20">
                  Règle : Jamais désarmé
                </Strong>
              </P>
              <P alignCenter>
              Un joueur doit toujours posséder au moins une ARME dans la main. Si ce n’est pas le cas, il défausse sa main et en pioche une nouvelle. On ne peut lui prendre sa dernière arme.
              </P>

              <H1 alignCenter>Présentation des cartes</H1>

    
              <H2>Rencontres</H2>
              
              <H3>Monstres</H3>
              <P>
                Un MONSTRE possède des points de vie, une description, un malus et une icône indiquant le nombre de cartes récompenses en haut à droite.
              </P>

              <H3>Boss</H3>
              <P>
                Un BOSS est une RENCONTRE représentant le défi ultime du donjon.
              </P>

              <H3>Spéciale</H3>
              <P>
                Une RENCONTRE optionnelle qui ne constitue pas un combat contre un MONSTRE.
              </P>

              <H2>Objets</H2>
              
              <H3>Arme</H3>
              <P>
                Une ARME peut être utilisée de façon illimitée. Elle effectue un nombre de dégâts équivalent à sa puissance lorsque l’exercice associé est correctement réalisé.
              </P>

              <H3>Amélioration</H3>
              <P>
                Elle doit être associée à une ARME pour infliger des dégâts supplémentaires. Les exercices doivent être effectués pour chaque attaque améliorée lancée.
              </P>

              <H3>Bonus</H3>
              <P>
                Il a des effets et des conditions d’utilisation particulières.
              </P>

              <H1 alignCenter>Déroulement du jeu</H1>

              <P>Le jeu se déroule en 3 phases :</P>
              <P>PHASE 1 : Piocher et résoudre une carte RENCONTRE</P>
              <P>PHASE 2 : Récupérer ses récompenses</P>
              <P>
                PHASE 3 : Provoquer une BASTON (seulement pour une partie à plus de 1 joueur) L’ensemble des joueurs jouent les phases en même temps, ou chacun leur tour s’ils manquent de place.
              </P>
              <Br />
              <P>
                PHASE 1 : Piocher et résoudre une carte RENCONTRE Chaque joueur pioche et résout sa carte RENCONTRE selon les règles suivantes : Si c’est un MONSTRE, le joueur peut effectuer les actions dans l’ordre suivant : 
                <Li>
                  Le joueur peut utiliser une seule carte OBJET de type BONUS.
                </Li>
                <Li>
                  Si le MONSTRE inflige un malus, il doit l’effectuer.
                </Li>
                <Li>
                  Il peut utiliser ses ARMES et AMELIORATIONS pour effectuer un enchaînement d’attaques qui infligent des dégâts au MONSTRE, en organisant ses séries de répétitions et ses temps de pause comme il le souhaite.
                </Li>
              </P>
              <P>
                L’étape 3 est réalisée jusqu’à ce que le MONSTRE tombe en dessous de 0 point de vie, le combat est alors terminé. Le joueur peut décider à n’importe quel moment du combat d’esquiver (Voir la règle de l’esquive).
              </P>
              <P>
                Une fois vaincu, le joueur garde le MONSTRE comme trophée. Si le joueur ne finit pas le combat ou ne réussit pas à l’esquiver, il est considéré comme éliminé de la partie. La carte MONSTRE est alors défaussée.
              </P>
              <P>
                Si c’est une RENCONTRE SPÉCIALE, elle n’est pas considérée comme un combat. Le joueur peut donc choisir de l’effectuer ou non. Si oui et qu’il la réussit, il conserve la carte dans sa main. S’il ne l’effectue pas, la carte est défaussée et le joueur a fini la phase.
              </P>
              <P>
                Si c’est le BOSS, la dernière phase du jeu commence. (Voir la fin de la partie)
              </P>

              <Br />

              <P>PHASE 2 : Récupérer ses récompenses</P>
              <P>
                Les joueurs ayant combattu un MONSTRE ont le droit de piocher une ou plusieurs cartes OBJETS de la pile (en fonction de l’icône sur la carte MONSTRE) et les ajouter à leur inventaire. Les joueurs piochent dans l’ordre dans lequel ils ont fini la PHASE 1.
              </P>

              <Br />

              <P>PHASE 3 : Provoquer une BASTON (2 joueurs et plus)</P>
              <P>
                Un joueur peut décider de provoquer un de ses adversaires. Ceci crée une BASTON. Tous les joueurs peuvent participer à la BASTON.
              </P>
              <P>
                Voici le déroulement :
                <Li>Le joueur, qui est attaqué, a l’initiative.</Li>
                <Li>
                  Le joueur qui a l’initiative choisit une attaque (avec ou sans AMELIORATION) et choisit le nombre de fois  qu’il veut l’effectuer en une seule série, sans pause.
                </Li>
                <Li>
                  Il réalise les exercices définis et c’est ensuite aux autres joueurs participant à la BASTON d’effectuer la même chose dans les mêmes conditions. Si un joueur n’arrive pas à effectuer l’enchaînement, il est éliminé de la BASTON.
                </Li>
                <Li>
                  Une fois que chaque joueur participant a terminé, le joueur suivant dans l’ordre de décision de participation à la BASTON prend l’initiative et le combat reprend à l’étape 2.
                </Li>
              </P>
              <P>La BASTON se termine quand il ne reste qu’un joueur.</P>
              <P>
                Le joueur restant vole un OBJET à chaque participant de la BASTON mais il doit cependant veiller à respecter la règle Jamais désarmé. Une égalité peut être décidée par les joueurs selon les circonstances ne provoquant pas de mouvement d’OBJETS.
              </P>
              
            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </Modal>
    </>
  );
}
 
export default RuleBook;