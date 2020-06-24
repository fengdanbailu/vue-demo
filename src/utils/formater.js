import { getUUID } from './random';

/*
*  format tree to list no level limit
*
*  @params treeData
*  @params children ：path of children node
* */
export const treeToList = (treeData, children = 'children') => {
  const list = [];

  const format = (tree, result = []) => {
    tree.forEach((node) => {
      result.push(node);

      if (node[children]) {
        return format(node[children], result);
      }
    });

    return result;
  };

  return format(treeData, list);
};

export const treeToListWithLevel = (treeData, children = 'children') => {
  const rootNode = { nodeId: getUUID(), text: 'rootNode', type: 'GROUP' };
  const list = [ rootNode ];

  const format = (tree, result = [], parent = rootNode) => {
    tree.forEach((node) => {
      if (node.text === 'ALL') {
        return format(node[children], result, parent);
      }

      if (Array.isArray(node.children) && node.children.length > 0) {
        node.nodeId = getUUID();
        node.pId = parent.nodeId;
        node.type = 'GROUP';
      }
      else {
        node.nodeId = getUUID();
        node.pId = parent.nodeId;
        node.type = 'ENTITY';
      }

      result.push(node);

      if (node[children] && node[children].length > 0) {
        return format(node[children], result, node);
      }
    });

    return result;
  };

  return format(treeData, list);
};


export const branchToList = (data, children = 'children') => {
  const [ rootNode ] = data;

  rootNode.nodeId = getUUID();
  rootNode.type = 'GROUP';

  const childrens = rootNode[children];
  const caculated = [ rootNode ];

  const format = (tree, result = [], parent) => {
    tree.forEach((node) => {
      if (node.text === 'ALL') {
        return format(node[children], result, parent);
      }


      if ((Array.isArray(node.children) && node.children.length > 0) || node.data.database_id == null) {
        node.nodeId = getUUID();
        node.pId = parent.nodeId;
        node.type = 'GROUP';
      }
      else {
        node.nodeId = getUUID();
        node.pId = parent.nodeId;
        node.type = 'ENTITY';
      }

      result.push(node);

      if (node[children] && node[children].length > 0) {
        return format(node[children], result, node);
      }
    });

    return result;
  };

  return format(childrens, caculated, rootNode);
};


export default {
  treeToList,
};
