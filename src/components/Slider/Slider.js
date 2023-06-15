import ReactSlider from 'react-slider';
import { Wrapper } from './Slider.style';

export const Slider = ({ onChange }) => {
  const thumbMap = value => {
    switch (value) {
      case 0:
        return 'Assist';
      case 1:
        return 'Do';
      case 2:
        return 'Guide';
      default:
        return 'Lead';
    }
  };

  return (
    <Wrapper>
      <ReactSlider
        className="horizontal-slider"
        marks
        markClassName="example-mark"
        min={0}
        max={3}
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderMark={props => (
          <span {...props}>
            <span className="mark-text">{thumbMap(props.key)}</span>
          </span>
        )}
        onChange={onChange}
      />
    </Wrapper>
  );
};
