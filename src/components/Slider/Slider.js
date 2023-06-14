import ReactSlider from 'react-slider';
import { Wrapper } from './Slider.style';

export const Slider = () => {
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
      />
    </Wrapper>
  );
};
