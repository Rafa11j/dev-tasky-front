import NextLink from 'next/link';
import { ComponentType } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { useRouter } from 'next/dist/client/router';
import { Container } from './styles';
import { Tooltip } from '../../../shared/Tooltip';

interface MenuItemProps {
  title: string;
  path: string;
  icon: ComponentType<IconBaseProps>;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  icon: Icon,
  path,
}) => {
  const { pathname } = useRouter();

  return (
    <Tooltip title={title}>
      <NextLink href={path} passHref>
        <Container active={pathname.includes(path)}>
          <Icon />
        </Container>
      </NextLink>
    </Tooltip>
  );
};
