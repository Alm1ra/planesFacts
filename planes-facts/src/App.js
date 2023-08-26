import Card from './components/Card';
import Fact from './components/Fact';
import F14 from './img/F14.png';
import F22 from './img/F22.png';
import Harrier from './img/Harrier.png';
import Dogfight from './img/Dogfight.png';
import Rafale from './img/Rafale.png';
import Header from './components/Header';

function App() {

  const facts = [
    {
      title: 'Stealth Mastery',
      image: F22,
      description: 'Stealth fighters, like the F-22 Raptor, are designed to evade enemy radar. Their angular shapes and radar-absorbing materials make them nearly invisible to detection.',
    },
    {
      title: 'Dogfight Legends',
      image: Dogfight,
      description: 'The term "dogfight" originated from World War I aerial combat, where pilots maneuvered like dogs chasing their tails. Modern technology has changed the nature of air combat, but the term endures.',
    },
    {
      title: 'G-Force Endurance',
      image: F14,
      description: 'Fighter pilots endure extreme G-forces during maneuvers. The human body can handle up to 9 Gs, but with specialized suits and training, pilots can push this limit.',
    },
    {
      title: 'Vertical Takeoff Marvels',
      image: Harrier,
      description: 'Vertical takeoff and landing (VTOL) fighters, like the Harrier Jump Jet, can lift off and land vertically, enabling them to operate from confined spaces or even amphibious assault ships.',
    },
    {
      title: 'Versatile Weapons',
      image: Rafale,
      description: 'Some fighter jets carry an array of weapons, from air-to-air missiles to precision bombs. This versatility allows them to adapt to different missions swiftly.',
    }
  ];

  return (
    <Card>
      <Header/>
      <div id="facts">
        <Fact image={facts[0].image} title={facts[0].title} description={facts[0].description}></Fact>
        <Fact image={facts[1].image} title={facts[1].title} description={facts[1].description}></Fact>
        <Fact image={facts[2].image} title={facts[2].title} description={facts[2].description}></Fact>
        <Fact image={facts[3].image} title={facts[3].title} description={facts[3].description}></Fact>
        <Fact image={facts[4].image} title={facts[4].title} description={facts[4].description}></Fact>
      </div>   
    </Card>
  );
}

export default App;
