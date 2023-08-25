import './App.css';
import Card from './components/Card'

function App() {

  const facts = [
    {
      title: 'Supersonic Speedsters',
      image: 'aaaa',
      description: 'Fighter planes are known for their blistering speed. The fastest fighter, the North American X-15, reached a mind-boggling speed of over 4,500 mph (7,270 km/h).',
    },
    {
      title: 'Dogfight Legends',
      image: 'bbbb',
      description: 'The term "dogfight" originated from World War I aerial combat, where pilots maneuvered like dogs chasing their tails. Modern technology has changed the nature of air combat, but the term endures.',
    },
    {
      title: 'G-Force Endurance',
      image: 'cccc',
      description: 'Fighter pilots endure extreme G-forces during maneuvers. The human body can handle up to 9 Gs, but with specialized suits and training, pilots can push this limit.',
    },
    {
      title: 'Vertical Takeoff Marvels',
      image: 'dddd',
      description: 'Vertical takeoff and landing (VTOL) fighters, like the Harrier Jump Jet, can lift off and land vertically, enabling them to operate from confined spaces or even amphibious assault ships.',
    }
  ];

  return (
    <Card>
      <header>
        <h1>Unveiling Fighter Plane Facts</h1>
      </header>
    </Card>
  );
}

export default App;
