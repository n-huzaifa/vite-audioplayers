import React from "react";
import { FiPlay } from "react-icons/fi";
import { FiPause } from "react-icons/fi";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className='audio-controls'>
    <button
      type='button'
      className='prev'
      aria-label='Previous'
      onClick={onPrevClick}>
      <GrFormPrevious />
    </button>
    {isPlaying ? (
      <button
        type='button'
        className='pause'
        onClick={() => onPlayPauseClick(false)}
        aria-label='Pause'>
        <FiPause />
      </button>
    ) : (
      <button
        type='button'
        className='play'
        onClick={() => onPlayPauseClick(true)}
        aria-label='Play'>
        <FiPlay />
      </button>
    )}
    <button
      type='button'
      className='next'
      aria-label='Next'
      onClick={onNextClick}>
      <GrFormNext />
    </button>
  </div>
);

export default AudioControls;
