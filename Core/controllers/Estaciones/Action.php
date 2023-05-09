<?php
class Action
{
    private $action;
    private $actionList;

    public function __construct()
    {
        $this->actionList=array("getApiData","getEstacionesData");
    }

	/**
	 * @return mixed
	 */
	public function getAction() {
		return $this->action;
	}
	
	/**
	 * @param mixed $action 
	 * @return self
	 */
	public function setAction($action) {
		$this->action = $action;
		return $this;
	}

	/**
	 * @return string[]
	 */
	public function getActionList() {
		return $this->actionList;
	}
	
	/**
	 * @param string[] $actionList 
	 * @return self
	 */
	public function setActionList($actionList) {
		$this->actionList = $actionList;
		return $this;
	}
}
?>