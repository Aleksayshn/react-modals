import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { StickerForm } from './StickerForm/StickerForm';
import { StickerList } from './StickerList/StickerList';


export const App = ({ initialStickers = [] }) => {
  const [stickers, setStickers] = useState(initialStickers);

  const addSticker = (img, label) => {
    setStickers(prevStickers => [
      ...prevStickers,
      { id: nanoid(), img, label }
    ]);
  };

  return (
    <Layout>
      <StickerForm onSubmit={addSticker} />
      {stickers.length > 0 && <StickerList items={stickers} />}
    </Layout>
  );
}