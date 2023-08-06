import React, { Children, Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { fetchImages } from '../utills/images-api-sevice';
import {
  StyledMain,
  StyledSection,
  StyledContainer,
} from '../styles/GlobalStyle';

export class App extends Component {
  state = {
    hits: [], // Массив для хранения загруженных изображений
    page: 1, // Номер текущей страницы
    per_page: 6, // Количество изображений на одной странице
    query: '', // Запрос для поиска изображений
    total: null, // Общее количество найденных изображений
    error: '', // Сообщение об ошибке (если возникла)
    loading: false, // Флаг, показывающий, идет ли загрузка данных
    buttonIsGone: false, // Флаг, показывающий, что кнопка не отображается (не используется в данном коде)
    isModalOpen: false,
  };

  // Когда компонент монтируется, вызывается этот метод
  async componentDidMount() {
    await this.handleLoadImages(); // Загружаем изображения при монтировании компонента
  }

  // Когда компонент обновляется (изменяется состояние или пропсы), вызывается этот метод
  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;

    // Если значение запроса или текущей страницы изменились, обновляем изображения
    if (prevState.query !== query || prevState.page !== page) {
      await this.handleLoadImages(); // Перезагружаем изображения при изменении запроса или страницы
    }
  }

  // Функция для загрузки изображений с API
  handleLoadImages = async () => {
    try {
      this.setState({ loading: true }); // Устанавливаем флаг загрузки в true
      const { per_page, page, query } = this.state;
      // Выполняем запрос на получение изображений с указанными параметрами
      const { hits, total, total_hits } = await fetchImages({
        per_page: per_page,
        page: page,
        q: query,
      });

      if (page === 1) {
        // Если это первая страница, загружаем все изображения без использования запроса
        // const { hits } = await fetchImages({
        //   per_page: total_hits, // Указываем total_hits для загрузки всех доступных изображений
        // });
        this.setState({
          hits: hits,
          total: total,
          total_hits: total_hits,
        });
      } else {
        // Если это не первая страница, добавляем новые изображения в конец текущего массива
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          total: total,
          total_hits: total_hits,
        }));
      }
    } catch (error) {
      console.warn(error.message); // Выводим сообщение об ошибке в консоль
    } finally {
      this.setState({ loading: false }); // Устанавливаем флаг загрузки в false после завершения запроса
    }
  };

  // Функция для обработки клика по кнопке "Загрузить еще"
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 })); // Увеличиваем текущую страницу на 1
  };

  // Функция для обработки изменения запроса в поисковой строке
  handleChangeQuery = query => {
    if (query === this.state.query) {
      alert('Пожалуйста, измените ваш запрос!'); // Если запрос не изменился, выводим предупреждение
      return;
    }
    this.setState({ query: query, hits: [], page: 1 }); // Обновляем состояние с новым запросом и сбрасываем текущую страницу на 1
  };

  toogleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  // Функция для рендеринга компонента
  render() {
    const { hits, loading, total, buttonIsGone, isModalOpen, children } =
      this.state;

    return (
      <>
        <StyledMain>
          <Searchbar setQuery={this.handleChangeQuery} />{' '}
          <StyledSection>
            <StyledContainer>
              <ImageGallery loading={loading}>
                {loading && !hits.length ? (
                  <Loader />
                ) : (
                  <ImageGalleryItem images={hits} />
                )}
              </ImageGallery>
              <Button disabled={loading} onClick={this.handleLoadMore}>
                {loading ? 'Loading...' : 'Load More'}
              </Button>
            </StyledContainer>
          </StyledSection>
          {isModalOpen && <Modal onClose={this.toogleModal}>{children}</Modal>}
        </StyledMain>
      </>
    );
  }
}
