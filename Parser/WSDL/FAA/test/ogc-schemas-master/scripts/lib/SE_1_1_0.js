var SE_1_1_0_Module_Factory = function () {
  var SE_1_1_0 = {
    n: 'SE_1_1_0',
    dens: 'http:\/\/www.opengis.net\/se',
    deps: ['XLink_1_0', 'Filter_1_1_0'],
    tis: [{
        ln: 'InterpolateType',
        bti: '.FunctionType',
        ps: [{
            n: 'lookupValue',
            rq: true,
            en: 'LookupValue',
            ti: '.ParameterValueType'
          }, {
            n: 'interpolationPoint',
            rq: true,
            col: true,
            en: 'InterpolationPoint',
            ti: '.InterpolationPointType'
          }, {
            n: 'mode',
            ti: 'Token',
            an: {
              lp: 'mode'
            },
            t: 'a'
          }, {
            n: 'method',
            ti: 'Token',
            an: {
              lp: 'method'
            },
            t: 'a'
          }]
      }, {
        ln: 'GeometryType',
        ps: [{
            n: 'propertyName',
            rq: true,
            en: {
              lp: 'PropertyName',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.PropertyNameType'
          }]
      }, {
        ln: 'SelectedChannelType',
        ps: [{
            n: 'sourceChannelName',
            rq: true,
            en: 'SourceChannelName'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancementType'
          }]
      }, {
        ln: 'DescriptionType',
        ps: [{
            n: 'title',
            en: 'Title'
          }, {
            n: '_abstract',
            en: 'Abstract'
          }]
      }, {
        ln: 'AnchorPointType',
        ps: [{
            n: 'anchorPointX',
            rq: true,
            en: 'AnchorPointX',
            ti: '.ParameterValueType'
          }, {
            n: 'anchorPointY',
            rq: true,
            en: 'AnchorPointY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'DisplacementType',
        ps: [{
            n: 'displacementX',
            rq: true,
            en: 'DisplacementX',
            ti: '.ParameterValueType'
          }, {
            n: 'displacementY',
            rq: true,
            en: 'DisplacementY',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'PointPlacementType',
        ps: [{
            n: 'anchorPoint',
            en: 'AnchorPoint',
            ti: '.AnchorPointType'
          }, {
            n: 'displacement',
            en: 'Displacement',
            ti: '.DisplacementType'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'PolygonSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.FillType'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.StrokeType'
          }, {
            n: 'displacement',
            en: 'Displacement',
            ti: '.DisplacementType'
          }, {
            n: 'perpendicularOffset',
            en: 'PerpendicularOffset',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'OnlineResourceType',
        ps: [{
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            an: {
              lp: 'type',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'href',
            an: {
              lp: 'href',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'role',
            an: {
              lp: 'role',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'arcrole',
            an: {
              lp: 'arcrole',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            an: {
              lp: 'show',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            an: {
              lp: 'actuate',
              ns: 'http:\/\/www.w3.org\/1999\/xlink'
            },
            t: 'a'
          }]
      }, {
        ln: 'SymbolizerType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'description',
            en: 'Description',
            ti: '.DescriptionType'
          }, {
            n: 'baseSymbolizer',
            en: 'BaseSymbolizer',
            ti: '.BaseSymbolizerType'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }, {
            n: 'uom',
            an: {
              lp: 'uom'
            },
            t: 'a'
          }]
      }, {
        ln: 'RasterSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'channelSelection',
            en: 'ChannelSelection',
            ti: '.ChannelSelectionType'
          }, {
            n: 'overlapBehavior',
            en: 'OverlapBehavior'
          }, {
            n: 'colorMap',
            en: 'ColorMap',
            ti: '.ColorMapType'
          }, {
            n: 'contrastEnhancement',
            en: 'ContrastEnhancement',
            ti: '.ContrastEnhancementType'
          }, {
            n: 'shadedRelief',
            en: 'ShadedRelief',
            ti: '.ShadedReliefType'
          }, {
            n: 'imageOutline',
            en: 'ImageOutline',
            ti: '.ImageOutlineType'
          }]
      }, {
        ln: 'ContrastEnhancementType',
        ps: [{
            n: 'normalize',
            rq: true,
            en: 'Normalize',
            ti: '.NormalizeType'
          }, {
            n: 'histogram',
            rq: true,
            en: 'Histogram',
            ti: '.HistogramType'
          }, {
            n: 'gammaValue',
            en: 'GammaValue',
            ti: 'Double'
          }]
      }, {
        ln: 'FormatNumberType',
        bti: '.FunctionType',
        ps: [{
            n: 'numericValue',
            rq: true,
            en: 'NumericValue',
            ti: '.ParameterValueType'
          }, {
            n: 'pattern',
            rq: true,
            en: 'Pattern'
          }, {
            n: 'negativePattern',
            en: 'NegativePattern'
          }, {
            n: 'decimalPoint',
            an: {
              lp: 'decimalPoint'
            },
            t: 'a'
          }, {
            n: 'groupingSeparator',
            an: {
              lp: 'groupingSeparator'
            },
            t: 'a'
          }]
      }, {
        ln: 'GraphicStrokeType',
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.GraphicType'
          }, {
            n: 'initialGap',
            en: 'InitialGap',
            ti: '.ParameterValueType'
          }, {
            n: 'gap',
            en: 'Gap',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'SvgParameterType',
        bti: '.ParameterValueType',
        ps: [{
            n: 'name',
            rq: true,
            an: {
              lp: 'name'
            },
            t: 'a'
          }]
      }, {
        ln: 'LinePlacementType',
        ps: [{
            n: 'perpendicularOffset',
            en: 'PerpendicularOffset',
            ti: '.ParameterValueType'
          }, {
            n: 'isRepeated',
            en: 'IsRepeated',
            ti: 'Boolean'
          }, {
            n: 'initialGap',
            en: 'InitialGap',
            ti: '.ParameterValueType'
          }, {
            n: 'gap',
            en: 'Gap',
            ti: '.ParameterValueType'
          }, {
            n: 'isAligned',
            en: 'IsAligned',
            ti: 'Boolean'
          }, {
            n: 'generalizeLine',
            en: 'GeneralizeLine',
            ti: 'Boolean'
          }]
      }, {
        ln: 'LabelPlacementType',
        ps: [{
            n: 'pointPlacement',
            rq: true,
            en: 'PointPlacement',
            ti: '.PointPlacementType'
          }, {
            n: 'linePlacement',
            rq: true,
            en: 'LinePlacement',
            ti: '.LinePlacementType'
          }]
      }, {
        ln: 'InterpolationPointType',
        bti: 'Filter_1_1_0.ExpressionType',
        ps: [{
            n: 'data',
            rq: true,
            en: 'Data',
            ti: 'Double'
          }, {
            n: 'value',
            rq: true,
            en: 'Value',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'FontType',
        ps: [{
            n: 'svgParameter',
            mno: 0,
            col: true,
            en: 'SvgParameter',
            ti: '.SvgParameterType'
          }]
      }, {
        ln: 'ConcatenateType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            rq: true,
            col: true,
            en: 'StringValue',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'LegendGraphicType',
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.GraphicType'
          }]
      }, {
        ln: 'LineSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.StrokeType'
          }, {
            n: 'perpendicularOffset',
            en: 'PerpendicularOffset',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'ChangeCaseType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            rq: true,
            en: 'StringValue',
            ti: '.ParameterValueType'
          }, {
            n: 'direction',
            ti: 'Token',
            an: {
              lp: 'direction'
            },
            t: 'a'
          }]
      }, {
        ln: 'FillType',
        ps: [{
            n: 'graphicFill',
            en: 'GraphicFill',
            ti: '.GraphicFillType'
          }, {
            n: 'svgParameter',
            mno: 0,
            col: true,
            en: 'SvgParameter',
            ti: '.SvgParameterType'
          }]
      }, {
        ln: 'StringPositionType',
        bti: '.FunctionType',
        ps: [{
            n: 'lookupString',
            rq: true,
            en: 'LookupString',
            ti: '.ParameterValueType'
          }, {
            n: 'stringValue',
            rq: true,
            en: 'StringValue',
            ti: '.ParameterValueType'
          }, {
            n: 'searchDirection',
            ti: 'Token',
            an: {
              lp: 'searchDirection'
            },
            t: 'a'
          }]
      }, {
        ln: 'ChannelSelectionType',
        ps: [{
            n: 'redChannel',
            rq: true,
            en: 'RedChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'greenChannel',
            rq: true,
            en: 'GreenChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'blueChannel',
            rq: true,
            en: 'BlueChannel',
            ti: '.SelectedChannelType'
          }, {
            n: 'grayChannel',
            rq: true,
            en: 'GrayChannel',
            ti: '.SelectedChannelType'
          }]
      }, {
        ln: 'PointSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'graphic',
            en: 'Graphic',
            ti: '.GraphicType'
          }]
      }, {
        ln: 'MapItemType',
        bti: 'Filter_1_1_0.ExpressionType',
        ps: [{
            n: 'data',
            rq: true,
            en: 'Data',
            ti: 'Double'
          }, {
            n: 'value',
            rq: true,
            en: 'Value',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'FormatDateType',
        bti: '.FunctionType',
        ps: [{
            n: 'dateValue',
            rq: true,
            en: 'DateValue',
            ti: '.ParameterValueType'
          }, {
            n: 'pattern',
            rq: true,
            en: 'Pattern'
          }]
      }, {
        ln: 'RecodeType',
        bti: '.FunctionType',
        ps: [{
            n: 'lookupValue',
            rq: true,
            en: 'LookupValue',
            ti: '.ParameterValueType'
          }, {
            n: 'mapItem',
            rq: true,
            col: true,
            en: 'MapItem',
            ti: '.MapItemType'
          }]
      }, {
        ln: 'HistogramType'
      }, {
        ln: 'TextSymbolizerType',
        bti: '.SymbolizerType',
        ps: [{
            n: 'geometry',
            en: 'Geometry',
            ti: '.GeometryType'
          }, {
            n: 'label',
            en: 'Label',
            ti: '.ParameterValueType'
          }, {
            n: 'font',
            en: 'Font',
            ti: '.FontType'
          }, {
            n: 'labelPlacement',
            en: 'LabelPlacement',
            ti: '.LabelPlacementType'
          }, {
            n: 'halo',
            en: 'Halo',
            ti: '.HaloType'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.FillType'
          }]
      }, {
        ln: 'SubstringType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            rq: true,
            en: 'StringValue',
            ti: '.ParameterValueType'
          }, {
            n: 'position',
            en: 'Position',
            ti: '.ParameterValueType'
          }, {
            n: 'length',
            en: 'Length',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'HaloType',
        ps: [{
            n: 'radius',
            en: 'Radius',
            ti: '.ParameterValueType'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.FillType'
          }]
      }, {
        ln: 'CoverageStyleType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'description',
            en: 'Description',
            ti: '.DescriptionType'
          }, {
            n: 'coverageName',
            en: 'CoverageName'
          }, {
            n: 'semanticTypeIdentifier',
            mno: 0,
            col: true,
            en: 'SemanticTypeIdentifier'
          }, {
            n: 'ruleOrOnlineResource',
            rq: true,
            col: true,
            etis: [{
                en: 'Rule',
                ti: '.RuleType'
              }, {
                en: 'OnlineResource',
                ti: '.OnlineResourceType'
              }],
            t: 'es'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'NormalizeType'
      }, {
        ln: 'BaseSymbolizerType',
        ps: [{
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }]
      }, {
        ln: 'ImageOutlineType',
        ps: [{
            n: 'lineSymbolizer',
            rq: true,
            en: 'LineSymbolizer',
            ti: '.LineSymbolizerType'
          }, {
            n: 'polygonSymbolizer',
            rq: true,
            en: 'PolygonSymbolizer',
            ti: '.PolygonSymbolizerType'
          }]
      }, {
        ln: 'InlineContentType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            t: 'ae'
          }, {
            n: 'encoding',
            rq: true,
            an: {
              lp: 'encoding'
            },
            t: 'a'
          }]
      }, {
        ln: 'MarkType',
        ps: [{
            n: 'wellKnownName',
            rq: true,
            en: 'WellKnownName'
          }, {
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: 'inlineContent',
            rq: true,
            en: 'InlineContent',
            ti: '.InlineContentType'
          }, {
            n: 'format',
            rq: true,
            en: 'Format'
          }, {
            n: 'markIndex',
            en: 'MarkIndex',
            ti: 'Integer'
          }, {
            n: 'fill',
            en: 'Fill',
            ti: '.FillType'
          }, {
            n: 'stroke',
            en: 'Stroke',
            ti: '.StrokeType'
          }]
      }, {
        ln: 'GraphicFillType',
        ps: [{
            n: 'graphic',
            rq: true,
            en: 'Graphic',
            ti: '.GraphicType'
          }]
      }, {
        ln: 'ExternalGraphicType',
        ps: [{
            n: 'onlineResource',
            rq: true,
            en: 'OnlineResource',
            ti: '.OnlineResourceType'
          }, {
            n: 'inlineContent',
            rq: true,
            en: 'InlineContent',
            ti: '.InlineContentType'
          }, {
            n: 'format',
            rq: true,
            en: 'Format'
          }, {
            n: 'colorReplacement',
            mno: 0,
            col: true,
            en: 'ColorReplacement',
            ti: '.ColorReplacementType'
          }]
      }, {
        ln: 'CategorizeType',
        bti: '.FunctionType',
        ps: [{
            n: 'lookupValue',
            rq: true,
            en: 'LookupValue',
            ti: '.ParameterValueType'
          }, {
            n: 'value',
            rq: true,
            en: 'Value',
            ti: '.ParameterValueType'
          }, {
            n: 'thresholdAndValue',
            mno: 0,
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'Value',
                ti: '.ParameterValueType'
              }, {
                en: 'Threshold',
                ti: '.ParameterValueType'
              }],
            t: 'ers'
          }, {
            n: 'threshholdsBelongTo',
            ti: 'Token',
            an: {
              lp: 'threshholdsBelongTo'
            },
            t: 'a'
          }]
      }, {
        ln: 'StringLengthType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            rq: true,
            en: 'StringValue',
            ti: '.ParameterValueType'
          }]
      }, {
        ln: 'GraphicType',
        ps: [{
            n: 'externalGraphicOrMark',
            mno: 0,
            col: true,
            etis: [{
                en: 'ExternalGraphic',
                ti: '.ExternalGraphicType'
              }, {
                en: 'Mark',
                ti: '.MarkType'
              }],
            t: 'es'
          }, {
            n: 'opacity',
            en: 'Opacity',
            ti: '.ParameterValueType'
          }, {
            n: 'size',
            en: 'Size',
            ti: '.ParameterValueType'
          }, {
            n: 'rotation',
            en: 'Rotation',
            ti: '.ParameterValueType'
          }, {
            n: 'anchorPoint',
            en: 'AnchorPoint',
            ti: '.AnchorPointType'
          }, {
            n: 'displacement',
            en: 'Displacement',
            ti: '.DisplacementType'
          }]
      }, {
        ln: 'StrokeType',
        ps: [{
            n: 'graphicFill',
            rq: true,
            en: 'GraphicFill',
            ti: '.GraphicFillType'
          }, {
            n: 'graphicStroke',
            rq: true,
            en: 'GraphicStroke',
            ti: '.GraphicStrokeType'
          }, {
            n: 'svgParameter',
            mno: 0,
            col: true,
            en: 'SvgParameter',
            ti: '.SvgParameterType'
          }]
      }, {
        ln: 'ShadedReliefType',
        ps: [{
            n: 'brightnessOnly',
            en: 'BrightnessOnly',
            ti: 'Boolean'
          }, {
            n: 'reliefFactor',
            en: 'ReliefFactor',
            ti: 'Double'
          }]
      }, {
        ln: 'TrimType',
        bti: '.FunctionType',
        ps: [{
            n: 'stringValue',
            rq: true,
            en: 'StringValue',
            ti: '.ParameterValueType'
          }, {
            n: 'stripOffPosition',
            ti: 'Token',
            an: {
              lp: 'stripOffPosition'
            },
            t: 'a'
          }, {
            n: 'stripOffChar',
            an: {
              lp: 'stripOffChar'
            },
            t: 'a'
          }]
      }, {
        ln: 'ColorReplacementType',
        ps: [{
            n: 'recode',
            rq: true,
            en: 'Recode',
            ti: '.RecodeType'
          }]
      }, {
        ln: 'ColorMapType',
        ps: [{
            n: 'categorize',
            rq: true,
            en: 'Categorize',
            ti: '.CategorizeType'
          }, {
            n: 'interpolate',
            rq: true,
            en: 'Interpolate',
            ti: '.InterpolateType'
          }]
      }, {
        ln: 'ElseFilterType'
      }, {
        ln: 'FeatureTypeStyleType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'description',
            en: 'Description',
            ti: '.DescriptionType'
          }, {
            n: 'featureTypeName',
            en: 'FeatureTypeName',
            ti: 'QName'
          }, {
            n: 'semanticTypeIdentifier',
            mno: 0,
            col: true,
            en: 'SemanticTypeIdentifier'
          }, {
            n: 'ruleOrOnlineResource',
            rq: true,
            col: true,
            etis: [{
                en: 'Rule',
                ti: '.RuleType'
              }, {
                en: 'OnlineResource',
                ti: '.OnlineResourceType'
              }],
            t: 'es'
          }, {
            n: 'version',
            an: {
              lp: 'version'
            },
            t: 'a'
          }]
      }, {
        ln: 'FunctionType',
        bti: 'Filter_1_1_0.ExpressionType',
        ps: [{
            n: 'fallbackValue',
            rq: true,
            an: {
              lp: 'fallbackValue'
            },
            t: 'a'
          }]
      }, {
        ln: 'ParameterValueType',
        ps: [{
            n: 'content',
            col: true,
            dom: false,
            en: {
              lp: 'expression',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.ExpressionType',
            t: 'er'
          }]
      }, {
        ln: 'RuleType',
        ps: [{
            n: 'name',
            en: 'Name'
          }, {
            n: 'description',
            en: 'Description',
            ti: '.DescriptionType'
          }, {
            n: 'legendGraphic',
            en: 'LegendGraphic',
            ti: '.LegendGraphicType'
          }, {
            n: 'filter',
            rq: true,
            en: {
              lp: 'Filter',
              ns: 'http:\/\/www.opengis.net\/ogc'
            },
            ti: 'Filter_1_1_0.FilterType'
          }, {
            n: 'elseFilter',
            rq: true,
            en: 'ElseFilter',
            ti: '.ElseFilterType'
          }, {
            n: 'minScaleDenominator',
            en: 'MinScaleDenominator',
            ti: 'Double'
          }, {
            n: 'maxScaleDenominator',
            en: 'MaxScaleDenominator',
            ti: 'Double'
          }, {
            n: 'symbolizer',
            rq: true,
            col: true,
            mx: false,
            dom: false,
            en: 'Symbolizer',
            ti: '.SymbolizerType',
            t: 'er'
          }]
      }, {
        t: 'enum',
        ln: 'DirectionType',
        bti: 'Token',
        vs: ['toUpper', 'toLower']
      }, {
        t: 'enum',
        ln: 'StripOffPositionType',
        bti: 'Token',
        vs: ['leading', 'trailing', 'both']
      }, {
        t: 'enum',
        ln: 'VersionType',
        vs: ['1.1.0']
      }, {
        t: 'enum',
        ln: 'ModeType',
        bti: 'Token',
        vs: ['linear', 'cosine', 'cubic']
      }, {
        t: 'enum',
        ln: 'MethodType',
        bti: 'Token',
        vs: ['numeric', 'color']
      }, {
        t: 'enum',
        ln: 'ThreshholdsBelongToType',
        bti: 'Token',
        vs: ['succeeding', 'preceding']
      }, {
        t: 'enum',
        ln: 'SearchDirectionType',
        bti: 'Token',
        vs: ['frontToBack', 'backToFront']
      }],
    eis: [{
        en: 'Rotation',
        ti: '.ParameterValueType'
      }, {
        en: 'FormatDate',
        ti: '.FormatDateType',
        sh: 'Function'
      }, {
        en: 'Mark',
        ti: '.MarkType'
      }, {
        en: 'GeneralizeLine',
        ti: 'Boolean'
      }, {
        en: 'ImageOutline',
        ti: '.ImageOutlineType'
      }, {
        en: 'RedChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Data',
        ti: 'Double'
      }, {
        en: 'Substring',
        ti: '.SubstringType',
        sh: 'Function'
      }, {
        en: 'Label',
        ti: '.ParameterValueType'
      }, {
        en: 'Size',
        ti: '.ParameterValueType'
      }, {
        en: 'GrayChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'Histogram',
        ti: '.HistogramType'
      }, {
        en: 'LegendGraphic',
        ti: '.LegendGraphicType'
      }, {
        en: 'DisplacementX',
        ti: '.ParameterValueType'
      }, {
        en: 'Position',
        ti: '.ParameterValueType'
      }, {
        en: 'SemanticTypeIdentifier'
      }, {
        en: 'PerpendicularOffset',
        ti: '.ParameterValueType'
      }, {
        en: 'CoverageName'
      }, {
        en: 'SvgParameter',
        ti: '.SvgParameterType'
      }, {
        en: 'InitialGap',
        ti: '.ParameterValueType'
      }, {
        en: 'ChangeCase',
        ti: '.ChangeCaseType',
        sh: 'Function'
      }, {
        en: 'Opacity',
        ti: '.ParameterValueType'
      }, {
        en: 'AnchorPoint',
        ti: '.AnchorPointType'
      }, {
        en: 'Fill',
        ti: '.FillType'
      }, {
        en: 'LookupString',
        ti: '.ParameterValueType'
      }, {
        en: 'Graphic',
        ti: '.GraphicType'
      }, {
        en: 'MinScaleDenominator',
        ti: 'Double'
      }, {
        en: 'GraphicFill',
        ti: '.GraphicFillType'
      }, {
        en: 'ChannelSelection',
        ti: '.ChannelSelectionType'
      }, {
        en: 'PolygonSymbolizer',
        ti: '.PolygonSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'InlineContent',
        ti: '.InlineContentType'
      }, {
        en: 'OverlapBehavior'
      }, {
        en: 'Recode',
        ti: '.RecodeType',
        sh: 'Function'
      }, {
        en: 'AnchorPointX',
        ti: '.ParameterValueType'
      }, {
        en: 'CoverageStyle',
        ti: '.CoverageStyleType'
      }, {
        en: 'TextSymbolizer',
        ti: '.TextSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'Halo',
        ti: '.HaloType'
      }, {
        en: 'Font',
        ti: '.FontType'
      }, {
        en: 'ElseFilter',
        ti: '.ElseFilterType'
      }, {
        en: 'Description',
        ti: '.DescriptionType'
      }, {
        en: 'ColorReplacement',
        ti: '.ColorReplacementType'
      }, {
        en: 'NumericValue',
        ti: '.ParameterValueType'
      }, {
        en: 'AnchorPointY',
        ti: '.ParameterValueType'
      }, {
        en: 'DisplacementY',
        ti: '.ParameterValueType'
      }, {
        en: 'StringValue',
        ti: '.ParameterValueType'
      }, {
        en: 'LabelPlacement',
        ti: '.LabelPlacementType'
      }, {
        en: 'LinePlacement',
        ti: '.LinePlacementType'
      }, {
        en: 'MarkIndex',
        ti: 'Integer'
      }, {
        en: 'GreenChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'InterpolationPoint',
        ti: '.InterpolationPointType',
        sh: {
          lp: 'expression',
          ns: 'http:\/\/www.opengis.net\/ogc'
        }
      }, {
        en: 'FeatureTypeName',
        ti: 'QName'
      }, {
        en: 'IsRepeated',
        ti: 'Boolean'
      }, {
        en: 'BrightnessOnly',
        ti: 'Boolean'
      }, {
        en: 'Geometry',
        ti: '.GeometryType'
      }, {
        en: 'Trim',
        ti: '.TrimType',
        sh: 'Function'
      }, {
        en: 'Concatenate',
        ti: '.ConcatenateType',
        sh: 'Function'
      }, {
        en: 'Threshold',
        ti: '.ParameterValueType'
      }, {
        en: 'Categorize',
        ti: '.CategorizeType',
        sh: 'Function'
      }, {
        en: 'ReliefFactor',
        ti: 'Double'
      }, {
        en: 'Length',
        ti: '.ParameterValueType'
      }, {
        en: 'PointPlacement',
        ti: '.PointPlacementType'
      }, {
        en: 'Pattern'
      }, {
        en: 'Interpolate',
        ti: '.InterpolateType',
        sh: 'Function'
      }, {
        en: 'FeatureTypeStyle',
        ti: '.FeatureTypeStyleType'
      }, {
        en: 'WellKnownName'
      }, {
        en: 'StringLength',
        ti: '.StringLengthType',
        sh: 'Function'
      }, {
        en: 'Displacement',
        ti: '.DisplacementType'
      }, {
        en: 'DateValue',
        ti: '.ParameterValueType'
      }, {
        en: 'Stroke',
        ti: '.StrokeType'
      }, {
        en: 'ContrastEnhancement',
        ti: '.ContrastEnhancementType'
      }, {
        en: 'RasterSymbolizer',
        ti: '.RasterSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'OnlineResource',
        ti: '.OnlineResourceType'
      }, {
        en: 'BlueChannel',
        ti: '.SelectedChannelType'
      }, {
        en: 'PointSymbolizer',
        ti: '.PointSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'ExternalGraphic',
        ti: '.ExternalGraphicType'
      }, {
        en: 'GammaValue',
        ti: 'Double'
      }, {
        en: 'MaxScaleDenominator',
        ti: 'Double'
      }, {
        en: 'ColorMap',
        ti: '.ColorMapType'
      }, {
        en: 'Symbolizer',
        ti: '.SymbolizerType'
      }, {
        en: 'ShadedRelief',
        ti: '.ShadedReliefType'
      }, {
        en: 'FormatNumber',
        ti: '.FormatNumberType',
        sh: 'Function'
      }, {
        en: 'Function',
        ti: '.FunctionType',
        sh: {
          lp: 'expression',
          ns: 'http:\/\/www.opengis.net\/ogc'
        }
      }, {
        en: 'IsAligned',
        ti: 'Boolean'
      }, {
        en: 'BaseSymbolizer',
        ti: '.BaseSymbolizerType'
      }, {
        en: 'Radius',
        ti: '.ParameterValueType'
      }, {
        en: 'MapItem',
        ti: '.MapItemType',
        sh: {
          lp: 'expression',
          ns: 'http:\/\/www.opengis.net\/ogc'
        }
      }, {
        en: 'LineSymbolizer',
        ti: '.LineSymbolizerType',
        sh: 'Symbolizer'
      }, {
        en: 'SourceChannelName'
      }, {
        en: 'Rule',
        ti: '.RuleType'
      }, {
        en: 'LookupValue',
        ti: '.ParameterValueType'
      }, {
        en: 'Name'
      }, {
        en: 'Normalize',
        ti: '.NormalizeType'
      }, {
        en: 'GraphicStroke',
        ti: '.GraphicStrokeType'
      }, {
        en: 'StringPosition',
        ti: '.StringPositionType',
        sh: 'Function'
      }, {
        en: 'NegativePattern'
      }, {
        en: 'Value',
        ti: '.ParameterValueType'
      }, {
        en: 'Gap',
        ti: '.ParameterValueType'
      }, {
        en: 'Format'
      }]
  };
  return {
    SE_1_1_0: SE_1_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], SE_1_1_0_Module_Factory);
}
else {
  var SE_1_1_0_Module = SE_1_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.SE_1_1_0 = SE_1_1_0_Module.SE_1_1_0;
  }
  else {
    var SE_1_1_0 = SE_1_1_0_Module.SE_1_1_0;
  }
}