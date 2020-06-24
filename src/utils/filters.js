import { getDate } from './date';

export const sudo = (isSudo) => (isSudo ? '是' : '否');

export const path = (p) => (p || '未填写');

export const backEmpty = (data) => (data || '暂无');

export const isPause = (pause) => (pause ? '否' : '是');

export const isExecSuccess = (state) => {
  state = `${state}`;

  const stateList = {
    0    : '未执行',
    1    : '成功',
    '-1' : '失败',
  };

  return stateList[state];
};

export const formatHost = (hosts) => hosts.map((item) => item.hostname).join('/r/n');

export const isSuccess = (success) => (success ? '成功' : '失败');

export const formatGroup = (type) => (type === 'collect' ? '采集' : type);

export const formatDate = getDate;
