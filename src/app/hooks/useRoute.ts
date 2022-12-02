import {
  generatePath,
  matchRoutes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useCallback, useMemo } from "react";
import { IRouteProps, publicRoutes as routes } from "../../router";

type ParamsKeyType = string | number | undefined | null;
type ParamsType = { [key: string]: ParamsKeyType } | null | any;
type CurrentPageType = string | number | undefined;

export default function useRoute() {
  const navigate = useNavigate();
  const location = useLocation();

  const getRoutesPathsArray = useCallback((allRoutes: IRouteProps[]) => {
    const newPathArray: { path: string }[] = [];

    const getPathsFromRoutes = (newAllRoutes: IRouteProps[]) => {
      for (const route of newAllRoutes) {
        if (route.items) {
          getPathsFromRoutes(route.items);
        }
        newPathArray.push({ path: route.path });
      }
    };
    getPathsFromRoutes(allRoutes);

    return newPathArray;
  }, []);

  const currentRoute = useMemo(() => {
    const pathsArray = getRoutesPathsArray(routes);
    // @ts-ignore
    const [{ route }] = matchRoutes(pathsArray, location);

    return route.path;
  }, [getRoutesPathsArray, location]);

  const goToBack = () => navigate(-1);

  const goToRoute = (
    route: string,
    params: ParamsType = {},
    replace = false
  ) => {
    if (route.includes(":pageNumber") && !params?.pageNumber) {
      params.pageNumber = "1";
    }

    navigate(params ? generatePath(route, params) : route, { replace });
  };

  const goToNextPage = (
    route: string,
    currentPage: CurrentPageType,
    params: ParamsType = null
  ) =>
    goToRoute(route, {
      ...params,
      pageNumber: Number(currentPage) + 1,
    });

  const goToPreviousPage = (
    route: string,
    currentPage: CurrentPageType,
    params: ParamsType = null
  ) =>
    goToRoute(route, {
      ...params,
      pageNumber: Number(currentPage) - 1,
    });

  return {
    currentRoute,
    goToNextPage,
    goToPreviousPage,
    goToBack,
    goToRoute,
  };
}
