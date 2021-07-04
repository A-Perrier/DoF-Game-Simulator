import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Article, Section, P, H1, H2, H3, Strong, Li, Br } from './HTMLElements'

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
              <Article>
                <Section>
                <H1>But du jeu</H1>
                  <P alignCenter>
                  Parcourez le Donjon dans le but de vaincre les MONSTRES et le BOSS pour accomplir votre destinée et devenir le nouveau champion.
                  </P>
                </Section>

                <Section>
                  <H1>A lire avant de commencer</H1>
                  <P alignCenter>
                  Jouer à ce jeu constitue une activité physique et sportive, vous devez adapter la difficulté du jeu aux participant(e)s et vous référer aux recommandations à la fin des règles. Les participant(e)s peuvent organiser leur effort comme ils le souhaitent, sauf en cas de BASTON ou de contre la montre.
                  </P>
                </Section>

                <Section>
                  <H1>Mise en place</H1>
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
                </Section>
              </Article>

              <Article>
                <H1>Présentation des cartes</H1>

                <Section>
                  <H2>Rencontres</H2>
                  
                  <H3>Monstres</H3>
                  <P>
                    Un MONSTRE possède des points de vie, une description, un malus et une icône indiquant le nombre de cartes récompenses en haut à droite.
                  </P>
                  <H3>Hordes</H3>
                  <P>
                    Les HORDES sont l'avant-dernière RENCOTNRE faite par les joueurs pendant une partie. La HORDE n'est pas un MONSTRE. Les effets de cartes fonctionnant contre les cartes MONSTRES (Shaker Poison par ex.) ne fonctionnent pas contre les HORDES.
                  </P>
                  <P>
                    Les HORDES ont un nombre de PV qui correspond au nombre de joueurs qui participent à la partie (sans tenir compte des alliances entre joueurs ou des Alliés)
                  </P>
                  <H3>Boss</H3>
                  <P>
                    Un BOSS est une RENCONTRE représentant le défi ultime du donjon.
                  </P>
                  <H3>Spéciale</H3>
                  <P>
                    Une RENCONTRE optionnelle qui ne constitue pas un combat contre un MONSTRE.
                  </P>
                </Section>

                <Section>
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
                </Section>
              </Article>

              <Article>
                <H2 alignCenter>Règle de coopération : les Partenaires</H2>
                <P>
                  Pumping Hordes introduit une difficulté croissante en fonction du nombre de joueurs. La coopération peut être la clef de la réussite.
                </P>
                <P>
                  Les joueurs ont la liberté de se porter assistance à chaque tour, ils deviennent alors des Partenaires pendant 1 tour. La décision de prêter assistance doit être prise après avoir révélé une carte RENCONTRE et avant de jouer la carte BONUS. Les Partenaires négocient comme ils le souhaitent le partage des récompenses de la RENCONTRE.
                </P>
                <P>
                  Les Partenaires portant assistance à un autre joueur doivent aussi effectuer le MALUS de la RENCONTRE sur laquelle ils interviennent, en intégralité, avant le combat tout comme le joueur assisté.
                </P>
                <P>
                  Les Partenaires peuvent utiliser des ARMES nécessitant 2 joueurs pendant le combat.
                </P>
                <P>
                  Les Partenaires portant assistance peuvent utiliser une ou plusieurs AMELIORATIONS de leur propre inventaire et effectuer les exercices pour renforcer les attaques du joueur qui reçoit l'assistance.
                </P>
                <P>
                  Les Partenaires portant assistance ne peuvent pas utiliser d'ARME et doivent utiliser des AMELIORATIONS de leur inventaire. S'ils n'ont pas d'amélioration ou d'arme à 2 joueurs, ils ne peuvent porter assistance.
                </P>
                <P>
                  Les joueurs et son/sa/ses Partenaires doivent effectuer les exercices en même temps. Le joueur recevant assistance peut aussi utiliser des AMELIORATIONS.
                </P>
                <P>
                  <Strong>Note : </Strong>
                  Contre le BOSS "Macaron le Roi", les exercices à 2 joueurs ne sont pas concernés.
                </P>
              </Article>

              <Article>
                <H2 alignCenter>Les cartes Allié</H2>
                <P>
                  Depuis Pumping Hordes, il est possible d'avoir des cartes Allié dans son inventaire.
                </P>
                <P>
                  Un Allié peut être permanent ou à usage unique. Il peut être une carte OBJET ou une carte RENCONTRE recrutée grâce aux effets de certaines cartes Spéciales et Objets. Lorsqu'une RENCONTRE est recrutée, elle ne permet pas de récupérer de récompense.
                </P>
                <P>
                  Un Allié produit des effets lors d'un combat, il peut :
                  <Li>Retirer des PV à un MONSTRE ou à une HORDE.</Li>
                  <Li>
                    Donner un bonus de temps au chronomètre ou de l'avance contre le BOSS
                  </Li>
                  <Li>
                    Être joué contre un autre joueur, il est alors considéré comme une RENCONTRE supplémentaire imposée à un autre joueur, lors de n'importe quelle RENCONTRE sauf le BOSS.
                  </Li>
                </P>
                <P>
                  Ces effets figurent directement sur la carte Allié ou sur la carte qui a permis le recrutement.
                </P>
              </Article>

              <Article>
                <Section>
                  <H1>Déroulement du jeu</H1>

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
                </Section>

                <Section>
                  <H1>L'esquive</H1>
                  <P>
                    À la place d’affronter une carte MONSTRE, le joueur peut choisir de l’esquiver. Pour l’esquiver le joueur doit effectuer 100 Jumping Jacks. Pour chaque esquive suivante, il devra rajouter 100 Jumping Jacks par esquive déjà effectuée lors des tours précédents et perdra un OBJET de son inventaire (à l’exception de sa dernière ARME). La carte MONSTRE est ensuite défaussée. Lors d’une RENCONTRE de type spécial, la carte est simplement défaussée, il n’est pas nécessaire de réaliser les Jumping Jacks et la perte d’un OBJET.
                  </P>
                  <P>En fonction de la situation, esquiver peut-être un choix stratégique !</P>
                </Section>

                <Section>
                  <H1>Fin de la partie</H1>

                  <P>Le BOSS est révélé, la partie est bientôt terminée !</P>
                  <P>
                    Tous les joueurs qui le souhaitent peuvent prendre part au challenge. Chaque joueur participant se bat en parallèle contre le BOSS (point de vie et malus ne se partagent pas entre les joueurs). Le premier joueur à vaincre le BOSS devient le champion (en cas de manque de place, utilisez un chronomètre et jouez à tour de rôle). La partie se termine là, sauf si un joueur décide de contester le champion !
                  </P>

                  <P>DEFIER LE CHAMPION (2 joueurs et plus)</P>

                  <P>
                    Le joueur ayant terrassé le BOSS en premier est le champion. Si un joueur le souhaite, il a le droit de tenter de l’affronter pour revendiquer son titre. Le même malus que le BOSS vaincu est infligé aux joueurs attaquants et les règles de la BASTON sont appliquées ensuite.
                  </P>

                  <P>
                    Le joueur vainqueur devient le champion et les autres sont définitivement éliminés de la partie.
                  </P>

                  <P>
                    La partie prend fin quand tous les joueurs sont éliminés ou qu’ils choisissent de ne pas affronter le champion.
                  </P>
                </Section>

                <Section>
                  <H3>Victoire des Partenaires : comment départager ?</H3>
                  <P>
                    Si 2 Partenaires ou plus battent le BOSS ensemble et remportent la victoire, il ne peut en rester qu'un. La règle BASTON s'applique automatiquement afin de les départager. Les autres joueurs ne peuvent participer à cette BASTON. Le gagnant de celle-ci peut être défié selon les règles du jeu de base.
                  </P>
                </Section>
              </Article>

              <Section>
                <H1>Diminuer la difficulté</H1>
                <P>
                  Voici quelques astuces pour diminuer la difficulté, libre à vous de définir des règles différentes en fonction de vos envies : 
                  <Li>
                    Les joueurs peuvent diminuer le nombre de MONSTRES dans la pioche (nombre de cartes piochées par joueur pour constituer la pile passe à 2 ou 3 par joueur). Ceci écourtera la partie.
                  </Li>
                  <Li>Les joueurs peuvent s’entraider et additionner leurs attaques et capacités.</Li>
                  <Li>Les joueurs peuvent esquiver avec seulement 50 Jumping Jacks.</Li>
                  <Li>
                    Se référer aux recommandations physiques et sportives pour adapter les exercices du jeu à vos capacités.
                  </Li>
                </P>
              </Section>

              <Section>
                <H1>Augmenter la difficulté</H1>
                <P>
                  Voici quelques astuces pour augmenter la difficulté, libre à vous de définir des règles différentes en fonction de vos envies : 
                  <Li>
                    Les joueurs peuvent ajouter des cartes RENCONTRES. Ceci rallongera la partie. Les plus fous peuvent ajouter des BOSS intermédiaires.
                  </Li>
                  <Li>
                    Les combats contre les MONSTRES peuvent également être réalisés dans un intervalle de temps défini à l’avance.
                  </Li>
                  <Li>
                    Chaque MONSTRE peut être considéré comme un combat de BOSS ou seul le plus rapide touche la récompense.
                  </Li>
                  <Li>Ajouter l’impossibilité d’esquiver.</Li>
                  <Li>Imposer des OBJETS particuliers pour travailler une partie du corps spécifique.</Li>
                  <Li>Une ARME se détruit après chaque MONSTRE forçant à en piocher une nouvelle pour la remplacer.</Li>
                </P>
              </Section>
              
              <Section>
                <H1>Recommandations physiques et sportives</H1>
                <P>
                  Jouer à Dungeon of Fitness est une activité physique et sportive, il est nécessaire d’obtenir un avis médical sur votre aptitude à pratiquer une activité physique et sportive.
                </P>
                <P>Avant, pendant et après la partie pensez à vous hydrater.</P>
                <P>
                  Echauffez-vous complètement et correctement avant la partie. Commencez par un échauffement articulaire de tout le corps en partant des chevilles jusqu’à la nuque. Exécutez quelques Jumpings Jacks et attaquez vos premiers MONSTRES sans trop d’explosivité et en fonction de vos capacités. N’hésitez pas à recourir à un coach sportif diplômé pour vous accompagner sur une première partie.
                </P>
                <P>
                  Adaptez les exercices en cas de difficulté trop élevée. Si vous êtes dans une démarche de reprise d’activité physique, certaines épreuves vous paraîtront trop difficiles, vous pouvez les adapter !
                </P>
                <P>
                  Voici quelques exemples :
                  <Li>Posez les genoux au sol pour exécuter des Push-Ups</Li>
                  <Li>Ne sautez pas lors des Jumping Jacks</Li>
                  <Li>Montez les genoux, un par un, lors des High Knees Jumps</Li>
                  <Li>Ne faites pas le Push-up lors des Burpees</Li>
                  <Li>Posez la pointe des pieds au sol lors du Crow</Li>
                  <Li>Utilisez vos jambes et abdominaux sur les Rowing Legs</Li>
                </P>
                <P>
                  Les sportifs les plus aguerris n’auront aucun mal à réaliser la plupart des exercices qui constituent les épreuves de Dungeon of Fitness, pour autant en cas de désorientation, douleurs ou vertiges stoppez l’activité et consultez un médecin.
                </P>
              </Section>

            </ScrollView>
          </ImageBackground>
        </View>
      </View>
    </Modal>
    </>
  );
}
 
export default RuleBook;