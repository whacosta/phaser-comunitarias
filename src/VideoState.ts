class VideoState extends Phaser.State {
  private readonly videoURL: string;
  private readonly video: Phaser.Video;
  private readonly nextState: string;

  constructor(videoURL: string, nextState: string) {
    super();
    this.videoURL = videoURL;
    this.nextState = nextState;
  }

  create() {
    const video = new Phaser.Video(this.game);
    video.createVideoFromURL(this.videoURL).addToWorld(0, 0, 0, 0);
    video.play();
    video.onComplete.add(this.goToNextState, this);
  }

  goToNextState() {
    this.game.state.start(this.nextState);
  }
}

export default VideoState;
