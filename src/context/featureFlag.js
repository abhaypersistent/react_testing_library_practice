import React, { useState } from 'react'

export const FeatureFlag = React.createContext({});

export const FeatureFlagProvider = ({children}) => {
    const [feature, setFeature] = useState({});
    return <FeatureFlag value={{feature}}>{children}</FeatureFlag>
}
