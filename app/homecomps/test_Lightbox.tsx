import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Lightbox from './Lightbox';

describe('Lightbox', () => {
  const media = 'https://example.com/image.jpg';
  const setIsOpen = jest.fn();

  it('renders an image when media is an image', () => {
    render(<Lightbox media={media} isOpen={true} setIsOpen={setIsOpen} />);
    const image = screen.getByAltText('lightbox');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', media);
  });

  it('renders a video when media is a video', () => {
    const video = 'https://example.com/video.mp4';
    render(<Lightbox media={video} isOpen={true} setIsOpen={setIsOpen} />);
    const videoElement = screen.getByRole('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('src', video);
  });

  it('calls setIsOpen with false when close button is clicked', () => {
    render(<Lightbox media={media} isOpen={true} setIsOpen={setIsOpen} />);
    const closeButton = screen.getByRole('button', { name: 'Close' });
    userEvent.click(closeButton);
    expect(setIsOpen).toHaveBeenCalledWith(false);
  });
});