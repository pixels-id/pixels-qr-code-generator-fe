import type { NextPage } from "next";
import Layout from "../Layout/Layout";
import AudioPlay from "../Layout/Main/AudioPlayer";

const AudioPlayer: NextPage = () => {
  return (
    <Layout>
      <AudioPlay />
    </Layout>
  );
};

export default AudioPlayer;
