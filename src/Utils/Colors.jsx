export const getBackground = (type) => {
    switch (type) {
      case 'fire':
        return '#FD7D24';
        break;
      case 'grass':
        return '#7FFFD4';
        break;
      case 'water':
        return '#4592C4';
        break;
      case 'electric':
        return '#EED535';
        break;
      case 'bug':
        return '#8CB230'
        break;
      case 'normal':
        return '#A8A77A'
      break;
      case 'ground':
        return '#E2BF65'
      break;
      case 'fairy':
        return '#EC2674';
        break;
      case 'Fighting':
        return '#C22E28';
        break;
      case 'poison':
        return '#AE88DD';
        break;
      default:
        return '#ffb';
    }
  };
  
  export const getTitle = (type) => {
    switch (type) {
      case 'fire':
        return '#FFA464';
        break;
      case 'grass':
        return '#60DFC8';
        break;
      case 'water':
        return '#8FD1FE';
        break;
      case 'electric':
        return '#FFD86F';
        break;
      case 'bug':
        return '#A8C545';
        break;
      case 'normal':
        return '#C6C6A7';
        break;
      case 'ground':
        return '#E2BF65';
        break;
      case 'fairy':
        return '#F47CAB';
        break;
      case 'Fighting':
        return '#E45B53';
        break;
      case 'poison':
        return '#D5C1F6';
        break; 
      default:
        return '#ffffbb84';
    }
  };
  