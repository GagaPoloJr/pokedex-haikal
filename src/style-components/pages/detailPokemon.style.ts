import styled from '@emotion/styled';

interface BgColorProps {
  color: string;
  variant?: string;
  handleColorType: (color: string, variant: string) => string;
}

export const BgColor = styled.div<BgColorProps>(({ color, variant, handleColorType }) => ({
  backgroundColor: handleColorType(color, variant),
  width: '100%',
  minHeight: '120vh',
  maxHeight: '100%',
  position: 'relative',
}));

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  text-transform: capitalize;
`;
export const SubTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: #333c62;
`;

export const TypeBg = styled.div<BgColorProps>(({ color, variant, handleColorType }) => ({
  backgroundColor: handleColorType(color, variant),
  fontSize: '12px',
  textAlign: 'center',
  width: '70px',
  padding: '5px',
  borderRadius: '20px',
  color: 'white',
  margin: '5px',
  zIndex: '2',
}));
export const ImgPoke = styled.img`
  max-width: 70%;
`;
export const TextCatch = styled.div`
  font-size: 12px;
`;
export const Description = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 80vh;
  padding: 20px;
  background: #2c3353;
  border-radius: 22px 22px 0px 0px;
  z-index: 3;
`;
