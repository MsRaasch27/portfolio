import { useEffect } from 'react';
import '../styles/Home.css';

const panelsData = [
  { className: 'panel1', lines: ['UX/UI', 'Designer', 'Visio/Figma'] },
  { className: 'panel2', lines: ['Trainer', 'Leader', 'Project Lead'] },
  { className: 'panel3', lines: ['Web', 'Programmer', 'Software'] },
  { className: 'panel4', lines: ['Teaching', 'Speaker', 'UAT'] },
  { className: 'panel5', lines: ['CNA', 'Helper', 'Volunteer'] },
];

export default function Home() {
  useEffect(() => {
    const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    function mouseOverEffect() {
      this.classList.add('panel-highlight');
    }

    function mouseOutEffect() {
      this.classList.remove('panel-highlight');
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
    panels.forEach(panel => panel.addEventListener('mouseover', mouseOverEffect));
    panels.forEach(panel => panel.addEventListener('mouseout', mouseOutEffect));

    return () => {
      panels.forEach(panel => panel.removeEventListener('click', toggleOpen));
      panels.forEach(panel => panel.removeEventListener('transitionend', toggleActive));
      panels.forEach(panel => panel.removeEventListener('mouseover', mouseOverEffect));
      panels.forEach(panel => panel.removeEventListener('mouseout', mouseOutEffect));
    };
  }, []);

  return (
    <div className="panels">
      {panelsData.map((panel, i) => (
        <div key={i} className={`panel ${panel.className}`}>
          {panel.lines.map((line, j) => (
            <p key={j}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
